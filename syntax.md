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
Number x = 1974893
Int y = 1
```

### Any (Objects)

```js
Any x = some_function.get() // auto type assign  for x
```

### Dictionary (HashMap)

```js
data -> Dict<int, String> = {}
Dict data = {} // auto type assign for data
```

### Constants (Not changeable)

```java
const String hello = "hello"
const hello -> String = "hello"
```

## If statements

### Simple if statement

```js
if ( <<condition>> ) {
    <statement>
}
```

### if else statement

```js
if ( <<condition>> ) {
    <statement>
} else {
    <statement>
}
```

### if else-if statement

````js
if ( <<condition>> ) {
    <statement>
} else-if (<<condition>>) {
    <statement>
} else {
    <statement>
}
````

## For and While statements

### For statement

```js
for ( <item> in <<iterator>> ) {
    <statement>
}
```

### While statement

```js
while ( <<condition>> ) {
    <statement>
}
```

## Functions and Classes definitions

### Function

> basic usage

```js
define <return_type> foo( <<arguments>> ) {
    <code>
}
```

> without return

```js
define void greet( String name ) {
    <code>
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