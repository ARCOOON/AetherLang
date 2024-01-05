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

```java
String hello = "hello"
String world = "world"
```

### Numbers

```java
Number a = 0
Int a = 0
```

### Dictionary or HashMap

```java
data -> Dict<int, String> = {}
```

### Constants (Not changeable)

```java
const String hello = "hello"
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
    <statement>
}
```

> without return

```js
define <void> greet( String name ) {
    <statement>
}
```

> with return

```js
define <type> get_value() {
    return <value>
}
```

### Class

```js
class some_class {}

class some_class extends some_other_class {}

class some_class implements some_other_class {}
```
