---
title: Mastering Nuxt
---

## Getting Started (8 Lessons)

### Course Introduction (04m 25s)

During this course, we'll be building a real-world application: an AirBNB clone
using Nuxt!

In this video, you'll meet your teacher Josh Deltener. He will give you an
overview of which topics we'll cover in the course, as well as provide an
introduction to why Nuxt.js is such a great framework.

Welcome to Mastering Nuxt, let's get started!

### Drawback of single page applications (03m 06s)

A Single Page Application (SPA) has many benefits, but it also has some
drawbacks. This lesson is all about the drawbacks.

### Nuxt To The Rescue (02m 41s)

In this lesson, we'll learn how Nuxt deals with the typical drawbacks that
Single Page Applications have.

### What Do I Need? (03m 18s)

In this lesson, we'll go through which applications you need to be installed on
your machine to follow along the course.

#### Lesson Resources

<!-- TODO: Create designcoder.net external redirect / referral tracking.  TODO: Add privacy policy -->

- [VS Code](<https://masteringnuxt.com/lessons/%5Bhttps://code.visualstudio.com/%5D(https://code.visualstudio.com/)>)
- [Vue.js Devtools for Chrome](<https://masteringnuxt.com/lessons/%5Bhttps://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd%5D(https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)>)
- [Vue.js Devtools for Firefox](<https://masteringnuxt.com/lessons/%5Bhttps://addons.mozilla.org/en-US/android/addon/vue-js-devtools/%5D(https://addons.mozilla.org/en-US/android/addon/vue-js-devtools/)>)

### How to Create a New Nuxt Project From Scratch (02m 04s)

In this lesson, you'll learn how to create a new project from scratch and
install Nuxt with your node package manager.

### Starting It Up (01m 20s)

In this lesson, we'll learn how to start our Nuxt dev environment.

### Creating Your First Page (01m 22s)

In this lesson, you'll learn how elegantly and quickly we can add new pages to
our Nuxt websites.

### Building Your Nuxt App (02m28s)

In this lesson, we'll learn how we to build and run our built Nuxt.js
application.

## Pages and Routing (7 Lessons)

### Creating Our Homepage (08m 33s)

In this lesson, you will learn how to import data from JSON files. We'll also
create a HomeCard component and use it to display the homes on our homepage.

#### Lesson Resources

- [homes.json test data](https://github.com/MasteringNuxt/NuxtBnB-course/blob/main/data/homes.json)
- [nuxt.config.js documentation](https://nuxtjs.org/docs/2.x/directory-structure/nuxt-config)

### Adding Meta Tags and Other Elements to the HTML Head Tag (04m 50s)

In this lesson, we'll learn how to add meta tags to our Nuxt applications to
create beautiful sharing cards and optimize our websites for search engines.

The same technique is used when we need to add script tags, link tags, style
tags, etc.

#### Lesson Resources

- [Meta Tags and SEO](https://nuxtjs.org/docs/2.x/features/meta-tags-seo)

### How Does Routing in Nuxt Work? (06m 08s)

In this lesson, we'll take a deeper dive into how routing works in Nuxt. You'll
also learn how to create dynamic routes and use query parameters to filter our
data and display specific homes.

### Creating the Property Page (04m 15s)

In this lesson, we'll add more details to the property page, and learn how to
use local images from our nuxt projext.

PS: Please make sure you download the
[lesson resources](https://github.com/MasteringNuxt/NuxtBnB-course/raw/main/resources/12-resources.zip)
and update your `homes.json` file.

### Nuxt Link (04m 20s)

In this lesson, we'll focus on navigation and learn the difference between
anchor tags, router-link, and nuxt-link.

### Disabling Prefetch Globally (01m 06s)

In this lesson, you'll learn how you can disable the prefetching of nuxt-links
on a global level.

### Creating Page Layouts (02m 57s)

In this lesson, you'll learn how to create layout components that wrap the Nuxt
pages.

You'll also learn how to specify which layout your page component should use.

## Working with Google Maps (6 Lessons)

### Creating a Google Account (02m 12s)

In this lesson, we'll create a Google account which, is the first step to use
the Google Maps library in our Nuxt.js application.

[Click here to create your own Google account](https://accounts.google.com/signup)

### Creating a Google Cloud Platform Account (03 42s)

In this lesson, we'll create a Google Cloud Platform account to get access to
the Google Maps API and use it in our Nuxt project.

[Click here to create your own Google Cloud Platform account](https://cloud.google.com/maps-platform)

### Adding a Map To The Property Page (08m)

In this lesson, we'll learn how to pull the Google Maps library into our project
and add a map to the Property page.

#### Lesson Resources

- [Google Maps Documentation - Overview](https://developers.google.com/maps/documentation/javascript/overview)
- [Google Maps Documentation - Loading the Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview#Loading_the_Maps_API)

### Problem 1 - Scripts and Single Page Apps (10m 21s)

In this lesson, we'll learn about a problem we can face when we're using
third-party libraries that aren't designed to support single page applications
natively.

### Problem 2 - Network Latency (07m 58s)

In this lesson, we'll learn how network latency can affect applications using
third-party libraries and how to fix the problem.

#### Lesson Resources

- [Charles Proxy](https://www.charlesproxy.com/)

### Solution - Plugins To The Rescue (13m 09s)

In this lesson, we'll learn how to use Nuxt.js Plugins to solve the two
third-party library problems.

#### Lesson Resource

- [Nuxt.js plugins documentation](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-plugins)

## Working with APIs (10 Lessons)

### Creating an Algolia Account (04m 51s)

In this lesson, we'll go through the steps of creating an Algolia account
together. Algolia will host our data and provide an API so we can store, fetch,
update, and search our data directly from our app.

#### Lesson Resources

- [algolia.com]

### Using APIs on the Property Page (10m 41s)

In this lesson, we'll start migrating away from getting our data from a static
file, and instead fetch our data directly from the Algolia API.

#### Lesson Resources

- [Search REST API Documentation](https://www.algolia.com/doc/rest-api/search/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [REST / Representational state transfer](https://en.wikipedia.org/wiki/Representational_state_transfer)

### Fetch & Polyfills (02m 08s)

In the previous lesson, we looked at the fetch API, which is supported by modern
browsers.

In this lesson, we'll evaluate what we as developers have to do to support the
older browsers, and other environments that don't have the fancy, new, and
convenient features we want to use when building modern apps.

#### Lesson Resources

- [node-fetch](https://github.com/node-fetch/node-fetch)
- [unfetch](https://github.com/developit/unfetch)
- [Polyfill.io](https://polyfill.io/)

### Handling Errors (10m 08s)

In this lesson, we'll make our Algolia integration more robust by making sure
we're handling errors the right way.

### Customizing The Error Page (03m 37s)

In this lesson, we'll talk about the importance of the error page and learn how
to create our own error page in Nuxt.

#### Lesson Resources

- [Google's 404 Page Recommendations](https://developers.google.com/search/docs/advanced/crawling/custom-404-pages)

### Importing Reviews Into Algolia (02m 29s)

In this lesson, we'll start working on the reviews feature. To start our new
feature, we will set up a new Algolia index and import our demo data. Please
download the file below to follow along.

#### Lesson Resources

[data/reviews.json demo data](https://github.com/MasteringNuxt/NuxtBnB-course/blob/a66f639ede27940047e9a0cc98083b14eaa8f415/data/reviews.json)

### Reviews Section on the Property Page (06m 27s)

In this lesson, we'll learn how to search for data in Algolia and implement the
reviews section on the property page.

#### Lesson Resources

- [Search Index API documentation](https://www.algolia.com/doc/rest-api/search/#search-index-post)

### Reviews Data Formatting (16m 29s)

In this lesson, we'll focus on formatting and improving the review data. We'll
use toLocaleDateString() to format the date how we want it, and we're going to
create a neat component that we can use to expand and contract longer reviews.

#### Lesson Resources

- [toLocaleDateString() Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)

### Host Section (04m 41s)

In this lesson, we'll create another index in Algolia for our hosts and list the
host information on the property page. Please make sure to download the demo
data below to follow along.

#### Lesson Resources

- [data/users.json demo data](https://github.com/MasteringNuxt/NuxtBnB-course/blob/a66f639ede27940047e9a0cc98083b14eaa8f415/data/users.json)

### Refactoring For Speed (05m 10s)

In this lesson, we'll evaluate our Property page and refactor to improve the
speed.

#### Lesson Resources

- [Promise.all() documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

## Geo Search (10 Lessons)

### Refactoring for Google Places

In this lesson, we'll be updating our Google Maps plugin in preparation to using
Google Places Autocomplete.

#### Lesson Resources

- [Google Places Autocomplete example](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch)

### Google Places Autocomplete

In this lesson, we'll implement the Google Places Autocomplete feature.

#### Lesson Resources

- [Autocomplete documentation](https://developers.google.com/maps/documentation/javascript/places-autocomplete)
- [PlaceGeometry interface documentation](https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceGeometry)
- [Programmatic navigation with Vue Router documentation](https://router.vuejs.org/guide/essentials/navigation.html)

### Importing New Properties

In this lesson, we'll update our test data so it's easier for us in the upcoming
lessons.

Please download the updated test data from the link below and update your
Algolia indexes.

#### Lesson Resources

- [Updated test data](https://github.com/MasteringNuxt/NuxtBnB-course/raw/main/resources/33-resources.zip)

### Creating the Geo Search Page

In this lesson, we'll dive into creating the functionality of our new Geo Search
Page.

#### Lesson Resources

- [Algolia aroundLatLng Documentation](https://www.algolia.com/doc/api-reference/api-parameters/aroundLatLng/)
- [Nuxt watchQuery documentation](https://nuxtjs.org/docs/2.x/components-glossary/pages-watchquery/)

### The Dev Bug

In this lesson, we'll take a look at and fix a bug that exists in our dev
environment.

#### Lesson Resources

- [In-component navigation guards](https://router.vuejs.org/guide/advanced/navigation-guards.html#in-component-guards)

### Adding Additional Property Details in the Search Results

In this lesson, we'll refactor our search results page into using a component.
We'll also add more properties and information about the home.

### Adding a Map to the Search Results Page

In this lesson, we'll improve our search results page by adding a map and
showing the location the user searches for.

### Adding Property Markers on the Map

In this lesson, we'll continue to work on the map on the search results page.
We'll improve it by marking the properties from the search result on our map.

#### Lesson Resources

- [LatLngBounds Documentation](https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBounds)
- [Array.prototype.map() Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [fitBounds Documentation](https://developers.google.com/maps/documentation/javascript/reference/map#Map.fitBounds)

### Marker Styling

In this lesson, we'll learn how we can restyle our markers and add the price per
night as a label to create a useful overview and a more custom feel to the map.

#### Lesson Resources

- [MarkerLabel Documentation](https://developers.google.com/maps/documentation/javascript/reference/marker#MarkerLabel)
- [Icon Documentation](https://developers.google.com/maps/documentation/javascript/reference/marker#Icon)
- [Transparent icon](https://maps.gstatic.com/mapfiles/transparent.png)

### Map Styles and Marker Effects

In this lesson, we'll learn how we create and apply effects to our markers.
We'll also learn how to control which information we show on our map.

#### Lesson Resources

- [Style Reference Documentation](https://developers.google.com/maps/documentation/javascript/style-reference?hl=en)
- [Optional Chaining (?.) Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

## Working with Modules (4 Lessons)

### Intro to Nuxt Modules

In this lesson, we'll start a new chapter about Nuxt Modules. Modules are a
powerful feature that allows us to customize the internal behavior of Nuxt.
Watch this lesson for an introduction to Nuxt modules.

#### Lesson Resources

- [Module Documentation](https://nuxtjs.org/docs/2.x/directory-structure/modules/)
- [Official Nuxt and community modules list](https://modules.nuxtjs.org/)

### The Module Environment

In this lesson, we'll start exploring the environment the Nuxt modules run in.

#### Lesson Resources

- [The ModuleContainer Class Documentation](https://nuxtjs.org/docs/2.x/internals-glossary/internals-module-container)

### Module Hooks

In this lesson, we'll learn about the Nuxt module and configuration hooks, which
allow us to invoke callbacks at specific stages of the application.

#### Lesson Resources

- [Hooks Documentation](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-hooks)

### Install the Tailwind CSS Module

To make styling easier for us, we'll be installing the Tailwind CSS module in
this lesson.

#### Lesson Resources

- [Tailwind CSS website](https://tailwindcss.com/)
- [Tailwind Nuxt Module Documentation](https://tailwindcss.nuxtjs.org/)
- [buildModules Documentation](https://nuxtjs.org/docs/2.x/directory-structure/modules/#buildmodules)

## Working with Styles and Design (5 Lessons)

### Setting up the Design

In this lesson, we'll configure our style processing setup.

Please make sure you download the design resources from the list below.

#### Lesson Resources

- [Design Resources](https://github.com/MasteringNuxt/NuxtBnB-course/raw/main/resources/45-resources.zip)
- [Assets Documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets/)
- [Webpack URL loader](https://github.com/webpack-contrib/url-loader)
- [Sass Basics](https://sass-lang.com/guide)
- [Tailwind configuration Documentation](https://v1.tailwindcss.com/docs/configuration#app)
- [build Property](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build)

### Styling the Header

In this lesson, we'll style the header of our application.

## Authentication (6 Lessons)

### Creating a Google oAuth2 Client ID

In this lesson, we'll create a Google oAuth2 Client ID and start working on the
authentication process of our Nuxt application.

#### Lesson Resources

- [Google Sign-in Documentation](https://developers.google.com/identity/sign-in/web/sign-in)
- [Google + oAuth 2 Documentation](https://developers.google.com/identity/protocols/oauth2)
- [Google Developers Console](https://console.developers.google.com/)

### Using Runtime Configs in Nuxt

In this lesson, we'll learn about runtime configs, which is a brilliant way to
define our application's configuration.

#### Lesson Resources

- [runtimeConfig documentation](https://nuxtjs.org/docs/2.x/directory-structure/nuxt-config#runtimeconfig)
- [Moving from @nuxtjs/dotenv to runtime config, article By Debbie O'Brien](https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config)

### Setting Up The Vuex Store

In this lesson, we'll play around with Vuex and learn how Vuex works with
Nuxt.js.

To get the most out of this lesson, you should be familiar with Vuex. If you
want to brush up on your Vuex skills, we recommend the free Vuex for Everyone
video course by Vue School.

#### Lesson Resources

- [store Directory Documentation](https://nuxtjs.org/docs/2.x/directory-structure/store/)
- [Vuex Documentation](https://vuex.vuejs.org/)
- [Vue.js Devtools for Google Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
- [Vuex For Everyone Course](https://vueschool.io/courses/vuex-for-everyone)

## Refactoring and Improvements (7 Lessons)

## Property Availability (3 Lessons)

## Accounts (8 Lessons)

## Getting Paid (4 Lessons)

## Create a Listing (4 Lessons)

## Deploying Nuxt Applications (4 Lessons)