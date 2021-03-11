---
title: PHP
category: Snippets
position: 12
---

```php
// https://dev.to/rickavmaniac/my-beloved-php-cheat-sheet-7dl
// Naming convention
$first_name = 'Mike'. // all lower case with underscore separators
function updateProduct() // camelCase
class ProductItem // StudlyCaps
const ACCESS_KEY = '123abc'; // all upper case with underscore separators

// output
echo 'Hello World';

//variable declaration
$name = 'Mike'; //string
$is_active = true; //boolean
$number = 25; //integer
$amount = 99.95; //float


//string concat
echo 'Hello ' . $name;

//string escape characters \n new line  \t tab  \\ backslash
echo "Hello Mike\nHello David";

//string interpolation
echo "Hello $name";

//string number of characters
echo strlen($name);

// Remove space(s) before and after
echo trim($text)

// Convert to lowercase / uppercase
echo strtolower($email);
echo strtoupper($name);

// Converts the first character to uppercase
echo ucfirst($name);  // 'Mike'

// Replace text a by text b in $text
echo str_replace('a', 'b', $text);

// String Contains (PHP 8)
echo str_contains($name, 'ke')  # true

// Check if numeric
echo is_numeric('59.99'); # true


// Round a number
echo(round(0.80));  // returns 1
echo(round(0.49));  // returns 0


// Random number
echo(rand(10, 100)); # 89


// Ternary operator (true : false)
echo $valid ? 'user valid' : 'user not valid';


//Null Coalesce Operator
echo $name ?? 'Mike';  //output 'Mike' if $name is null

//Null Coalesce Assignment
$name ??= 'Mike';


// Null Safe Operator (PHP 8) will return null if one ? is null
echo $user?->profile?->activate();

// Null Safe + Null Coalesce (if null will return 'No user profile')
echo $user?->profile?->activate() ?? 'Not applicable';


//Spaceship operator return -1 0 1
$names = ['Mike', 'Paul', 'John']
usort($names, function($a, $b) {
    return $a <=> $b;
}
// ['John', 'Mike', 'Paul']


// print variables contents (for debug)
var_dump($names);
print_r($names);

// terminate the current script
die();


//Conditionals
if ($condition == 10) {
    echo 'condition 10'
} elseif  ($condition == 5) {
    echo 'condition 5'
} else {
    echo 'all other conditions'
}

//Comparaison operation
== // equal no type check
=== // equal with type check
!= //not equal
|| //or
&& //and
> //greater than
< //less than


// Match Expression (PHP 8)
$type = match($color) {
    'red' => 'danger',
    'yellow', 'orange' => 'warning',
    'green' => 'success',
    default => 'Unknown'
};


//for loop
for ($i = 0; $i < 20; $i++) {
    echo "i value = " . i;
}


//while loop
$number = 1;
while ($number < 10) {
    echo 'value : ' . $number ;
    $number += 1;
}


//do while
$number = 1;
do {
    echo 'value : ' . $number ;
    $number += 1;
} while ($number < 10);


//Array declaration
$names = ['Mike', 'Peter', 'Shawn', 'John'];


//add to array
$names[] = 'Micheal';


//Spread Operator
$names = ['Mike', 'Peter', 'Paul'];
$people = ['John', ...$names]; // ['John', 'Mike', 'Peter', 'Paul']


//Remove array entry:
unset($names['Peter']);


//Array to string
echo implode(', ', $names) //output Mike, Shawn, John, Micheal


// String to Array
echo explode(',', $text); // ['Mike', 'Shawn', 'John']


// Direct access
echo $name[1] //output Peter


//loop for each array entry
foreach($names as $name) {
   echo 'Hello ' . $name;
}


// loop break / continue
$values = ['one', 'two', 'three'];
foreach ($values as $value) {
    if ($value === 'two') {
        break; // exit loop
    } elseif ($value === 'three') {
        continue; // next loop iteration
    }
}


// Number of items in a Array
echo count($names);


//Associative array:
$person = ['age' => 45, 'genre' => 'men'];


//Add to ass. array:
$person['name'] = 'Mike';


//loop ass. array key => value:
foreach($names as $key => $value) {
   echo $key . ' : ' . $value
}


// Check if a specific key exist
echo array_key_exist('age', $person);


// Return keys
echo array_keys($person); // ['age', 'genre']


// Return values
echo array_values($person) // [45, 'men']


//Array filter (return a filtered array)
$filtered_people = array_filter($people, function ($person) {
    return $names->active;
})


// Array map (return transform array):
$only_names = array_map(function($person) {
    return [‘name’ => $person->name];
}, $people)


//function declararion
function name($first_name, $last_name = 'default value') {
    puts $first_name . ' ' . $last_name
}

//function call
name('Mike', 'Taylor');

//function call with named parameters (PHP 8)
name(first_name: 'Mike', last_name: 'Taylor'); // order can change

//function variables params
function name(...$params) {
    return $params[0] . “ “ . params[1];
}


// Closure function
Route::get('/', function () {
     return view('welcome');
});


// Arrow functions
Route::get('/', fn () => return view('welcome');


//File read
$file = fopen("test.txt", "r");

//Output lines until EOF is reached
while(! feof($file)) {
  $line = fgets($file);
  echo $line. "<br>";
}
fclose($file);


// File write
$file = fopen('export.csv', 'a');
$array = ['name' => 'Mike', 'age' => 45];

//Write key name as csv header
fputcsv($file, array_keys($array[0]));

//Write lines (format as csv)
foreach ($array as $row) {
    fputcsv($file, $row);
}
fclose($file);


//Throw Error
if (someCondition) {
    throw new Exception('Data format error');
}


//Catch the Error
try {
  $db->checkData($data)
} catch (Exception as $e)
    echo $e->getMessage();
}


//class declaration
class Person
{
}


// object instantiation
$person = new Person


//class properties and constructor
class Person
{
   protected $first_name;
   protected $last_name;
   public function __construc($first_name, $last_name) {
        $this->first_name = $first_name;
        $this->last_name = $last_name
   }

// Constructor Property Promotion (PHP 8)
class Person
{
    public function __construc(protected $first_name, protected $last_name)
    {

    }

//static constructor
public static function create(...$params) {
    return new self($params)
}
$person = Person::create(‘Mike’, ‘Taylor’);


// class inheritance
class Customer extends Person
{
    public function name()
    {
        parent::name();
        echo 'Override method';
    }
}


// Static Method
class greeting {
  public static function welcome() {
    echo "Hello World!";
  }
}

// Call static method
greeting::welcome();


// Static method internal call
class greeting {
  public static function welcome() {
    echo "Hello World!";
  }

  public function __construct() {
    self::welcome();
  }
}
new greeting();


// Interface
interface Animal {
  public function makeSound();
}

class Cat implements Animal {
  public function makeSound() {
    echo "Meow";
  }
}
$animal = new Cat();
$animal->makeSound();


//Trait (mix-in)
trait HelloWorld {
    public function sayHello() {
        echo 'Hello World!';
    }
}

class Greetings {
    use HelloWorld;
}
$object = new Greetings();
$object->sayHello();
```
