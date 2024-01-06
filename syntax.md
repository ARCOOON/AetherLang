# Syntax for *AetherLang*

## Comments

```js
// This is a single-line comment

/*
This is a multi-line comment
This is a multi-line comment
*/
```

## Variable declaration

### Strings

```js
String hello = "hello"
```

### Numbers

```js
Int y = 1
```

### Bit

```java
Bit x = 0 | 1
```

### Booleans

```js
Bool my_boolean = true | false
```

### Auto

```js
auto x = some_function.get() // automatic type assignation  for x
```

### Dictionary (HashMap)

```js
Dict<type1, type2> <variable> = {}

data -> Dict<int, String> = {}
Dict data = {} // auto type assign for data
```

### Lists

```js
List<type> <variable> = []

List my_list = [] // auto type assign for my_list
List<String> = []
```

### Constants (Not changeable)

```js
const <type> <constant> = <a constant value>

const String hello = "hello"
```

## If statements

### Simple if statement

```js
if ( <<condition>> ) {
    ...
}
```

### if else statement

```js
if ( <<condition>> ) {
    ...
} else {
    ...
}
```

### if else-if statement

````js
if ( <<condition>> ) {
    ...
} else-if (<<condition>>) {
    ...
} else {
    ...
}
````

## Imports

```py
import package
import package as ...

from package import ...
from package import ... as ...
from package import *
```

## For and While statements

### For statement

```js
for ( <item> in <<iterator>> ) {
    ...
}
```

### While statement

```js
while ( <<condition>> ) {
    ...
}
```

## Functions and Classes definitions

### Function

> basic usage

```js
define <return_type> foo( <<arguments>> ) {
    ...
}
```

> without return

```js
define void greet( String name ) {
    ...
}
```

> with return

```js
define String get_something() {
    return "something"
}
```

### Class

```java
class some_class {}

class some_class extends some_other_class {}

class some_class implements some_other_class {}
```

## Keywords

### Functions, Classes

```js
@private
define void some_function() { ... }
```

```js
@private
class some_class {
    @protected
    define void init() { ... }

    @private
    define void some_private_function() { ... }
}
```

### Variables

> Private variables

```js
@private {
    String hello = "hello"
    String world = "world"
    Int x = 1
    ...
}
```
