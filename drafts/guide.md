# Guide


## Alpine.js

Alpine.js offers you the reactive and declarative nature of big frameworks like Vue or React at a much lower cost.

You get to keep your DOM, and sprinkle in behavior as you see fit.

Think of it like Tailwind for JavaScript.


There are 14 directives available to you:

| Directive                       | Description                                                                                 |
| ------------------------------- | ------------------------------------------------------------------------------------------- |
| [`x-data`](#x-data)             | Declares a new component scope.                                                             |
| [`x-init`](#x-init)             | Runs an expression when a component is initialized.                                         |
| [`x-show`](#x-show)             | Toggles `display: none;` on the element depending on expression (true or false).            |
| [`x-bind`](#x-bind)             | Sets the value of an attribute to the result of a JS expression.                            |
| [`x-on`](#x-on)                 | Attaches an event listener to the element. Executes JS expression when emitted.             |
| [`x-model`](#x-model)           | Adds "two-way data binding" to an element. Keeps input element in sync with component data. |
| [`x-text`](#x-text)             | Works similarly to `x-bind`, but will update the `innerText` of an element.                 |
| [`x-html`](#x-html)             | Works similarly to `x-bind`, but will update the `innerHTML` of an element.                 |
| [`x-ref`](#x-ref)               | Convenient way to retrieve raw DOM elements out of your component.                          |
| [`x-if`](#x-if)                 | Remove an element completely from the DOM. Needs to be used on a `<template>` tag.          |
| [`x-for`](#x-for)               | Create new DOM nodes for each item in an array. Needs to be used on a `<template>` tag.     |
| [`x-transition`](#x-transition) | Directives for applying classes to various stages of an element's transition.               |
| [`x-spread`](#x-spread)         | Allows you to bind an object of Alpine directives to an element for better reusability.     |
| [`x-cloak`](#x-cloak)           | This attribute is removed when Alpine initializes. Useful for hiding pre-initialized DOM.   |

And 6 magic properties:

| Magic Properties         | Description                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------- |
| [`$el`](#el)             | Retrieve the root component DOM node.                                               |
| [`$refs`](#refs)         | Retrieve DOM elements marked with `x-ref` inside the component.                     |
| [`$event`](#event)       | Retrieve the native browser "Event" object within an event listener.                |
| [`$dispatch`](#dispatch) | Create a `CustomEvent` and dispatch it using `.dispatchEvent()` internally.         |
| [`$nextTick`](#nexttick) | Execute a given expression AFTER Alpine has made its reactive DOM updates.          |
| [`$watch`](#watch)       | Will fire a provided callback when a component property you "watched" gets changed. |


***

## Basics
As we mentioned in the [getting started guide](/#getting-started-2), validation rules are defined inside the object returned by the `validations` method. We will refer to those as just _validations_ from now on.

You can access the component's instance and it's properties via `this` when writing more complicated validation rules.

::: warning
**Note:** Pre Vuelidate 2 `validations` was allowed to be an object as well as a function. This is still available, for backwards compatibility reasons, but is discouraged. Please migrate to a method instead.
:::

Each validation rule must have a corresponding property inside the `data` object.

```html
<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  setup () {
    return {
      v$: useVuelidate()
    }
  },
  data() {
    return {
      name: ''
    }
  },
  validations() {
    return {
      name: { required }
    }
  }
}
</script>
```

Vuelidate comes with a set of validators, that live inside the `@vuelidate/validations` package, which you must install separately. For a full list of available validators, check the [Validators](./validators.md) page.

Validators are functions that receive the matching value and return a either `true` or `false`, depending on whether the validator check passes or not.

The built-in validators are additionally wrapped in an object which contains several additional properties like:
* `$validator` – contains the validation function
* `$message` – contains the validator’s error message
* `$params` – contains the params that are passed during validator configuration (applies to validators that accept configuration)

Here’s an example of how the `minLength` validator looks like:

```js
export default function minLength (min) {
  return {
    $validator: minLength(min),
    $message: ({ $params }) => `This field should be at least ${$params.min} long.`,
    $params: { min }
  }
}
```

Vuelidate also supports writing your own custom validators, you can learn more about how to write your own validators on the [Custom Validators](./custom_validators.md) page.

### Checking for validation state

Now that we have our validation rules set up, we can start checking for errors.

Vuelidate builds a validation state, that can be accessed via the `v$` property (this is the property name that you return from `setup`). It is a nested object that follows your `validations` structure, but with some extra validity related properties.

`v$` is also reactive - meaning it changes as the user interacts with the state!

Building up on our form example above, to check whether name is valid we can now check to see if the `name.$error` property is `true` or `false`, and display an error for our users.

```html
<label>
  <input v-model="name">
  <div v-if="v$.name.$error">Name field has an error.</div>
</label>
```

Using this approach, you can apply error classes, show messages or add attributes.

The properties you will check against most often are:

```
  "$dirty": false,
  "$error": false,
  "$errors": [],
  "$silentErrors": [],
  "$invalid": false,
```

This is just a subset of all the properties, but they are enough to get us started. To see all available properties, check the [Validation state API](./api.md#validation-state-values)

### The dirty state

Vuelidate tracks the `$dirty` state of each property.

A property is considered `$dirty` after it has received some sort of interaction from the user, which means all properties begin with a `$dirty` state of `false`.

Although the validations will run in the background updating the `$invalid` state. However, the `$error` will stay `false` until both the `$dirty` and `$invalid` states are `true`.

There are multiple ways to update the `$dirty` state.

#### Using `$touch`

You can programmatically update the `$dirty` state by calling the `$touch` method. For example, for the `name` property you can call `v$.name.$touch()` to change it’s `$dirty` state.

Here’s an example of adding it to the above form, where we attach it to the `@blur` event so that our error only shows up after the user entered and left the input.

```html
<label>
  <input v-model="name" @blur="v$.name.$touch">
  <div v-if="v$.name.$error">Name field has an error.</div>
</label>
```

If you want to change the `$dirty` state for more than one property, you can also use `v$.$touch()`, which will call `$touch` on all the nested properties. This is useful in cases where you have a **Submit** button and want to trigger the whole form `$dirty`. See [Validatiing Forms Before Submitting](./guide#validating-forms-before-submitting) for an example.

#### Using the `$model` property

Another way to ensure that the `$dirty` state is updated when interactive with an input, is to directly bind your input's `v-model` declaration to the `$model` of that field's validation object.

This is a special property that acts as a "proxy" to the targeted property. When you modify it, it calls `$touch()` for that property and then proceedes to to update the original value.

```html
<template>
  <input v-model="v$.name.$model">
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  setup: () => ({ v$: useVuelidate() })
  data() {
    return {
      name: ''
    }
  },
  validations: {
    name: { required }
  }
}
</script>
```

This binding is accomplished internally through a getter/setter that reads and updates the original state. When the setter is called, it also triggers `$touch()` for that property.

#### Setting dirty state with `$autoDirty`

It is quite common to forget to use `$model` or `$touch`. If you want to ensure dirty state is always tracked, you can use the `$autoDirty` config param, when defining your validation rules:

```js
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  setup: () => ({ v$: useVuelidate() })
  data () {
    return { name: '' }
  },
  validations() {
    return {
      name: { required, $autoDirty: true },
    }
  }
}
```

It will ensure the validator tracks it's bound data, and sets the dirty state accordingly.

You can then change your field's `v-model` expression to just the data property:

```html
<input v-model="name">
```

#### Lazy validations

Validation in Vuelidate 2 introduces the `$lazy` param, which will make the selected validators lazy. That means they will only be called, after the property is `$dirty`, so after `touch()` is called, by using that property’s `$model` or by also using the `$autoDirty` param.

This saves extra invocations for async validators as well as makes the initial validation setup a bit more performant.

```js
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  setup: () => ({ v$: useVuelidate() })
  data () {
    return { name: '' }
  },
  validations() {
    return {
      name: { required, $lazy: true },
    }
  }
}
```

#### Resetting dirty state

If you wish to reset a form's `$dirty` state, you can do so by using the appropriately named `$reset` method.
For example when closing a create/edit modal, you dont want the validation state to persist.

```html
<app-modal @closed="v$.$reset()">
  <!-- some inputs  -->
</app-modal>
```

### Collective properties

The validation state has entries for each validator, that hold a set of helpful properties that we can use to show warnings, add classes and more.

```json
{
  "$dirty": false,
  "$error": false,
  "$errors": [],
  "$silentErrors": [],
  "$invalid": false,
  // ...other properties
  "name": {
    "$dirty": false,
    "required": {
      "$message": "Value is required",
      "$params": {},
      "$pending": false,
      "$invalid": false
    },
    "$invalid": false,
    "$pending": false,
    "$error": false,
    "$errors": [],
    "$silentErrors": []
    // ...other properties
  }
}
```

As you can see, the `name` field has it's own `$dirty`, `$error` among other attributes, as well as an object for the `required` validator.

The root properties like, `$dirty`, `$error` and `$invalid` are all collective computed properties, meaning their value changes depending on the nested children's state.

**Example:** If a form has 10 fields and one of them has it's `$error: true`, then the root `$error` will also be `true`, giving additional flexibility when trying to display error state.

### Displaying error messages

::: tip NEW IN v2.0
The built-in validators now all include error messages.
:::

The validation state holds useful data, like the invalid state of each property validator, along with extra properties, like an error message or extra parameters.

Error messages come out of the box with the bundled validators in `@vuelidate/validators` package. You can check how change those them over at the [Custom Validators page](./custom_validators.md)

The easiest way to display errors is to use the form's top level `$errors` property. It is an array of validation objects, that you can iterate over.

```html
<p
  v-for="(error, index) of v$.$errors"
  :key="index"
>
  <strong>{{ error.$validator }}</strong>
  <small> on property</small>
  <strong>{{ error.$property }}</strong>
  <small> says:</small>
  <strong>{{ error.$message }}</strong>
</p>
```

You can also check for errors on each form property:

```html
<p
  v-for="(error, index) of v$.name.$errors"
  :key="index"
>
  <!-- Same as above -->
</p>
```

### Validating forms before submitting

To submit a form, you often need to validate it first. In most cases, you can just check for the `$invalid` status of the form or `$error` if you want to only consider `$dirty` fields. It is a good practice to `$touch` the form first, so all validators (including those with `$lazy: true`) are run. This will also cause all the errors to show up that were hidden due to `$dirty` state being `false`.

```js
export default {
  methods: {
    submitForm() {
      this.v$.$touch()
      if(this.v$.$error) return
      // actually submit form
    }
  }
}
```

This is good for the general case, but what if you have async validators? You can use the `$validate` method, which returns a promise. That promise resolves with a boolean, depending on what the validation status is.

```js
export default {
  methods: {
    async submitForm() {
      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) return
      // actually submit form
    }
  }
}
```
