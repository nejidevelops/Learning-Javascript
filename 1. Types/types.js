// Types
/*
1.1 Primitives - When you access a primitive type you work directly on its value.
  1. String
  2. Number
  3. Boolean
  4. Null
  5. Undefined
  6. Symbol
  7. BigInt
  8. Object
  9. Function
  10. Array
*/

const foo = 1;
let bar = foo;

bar = 2;
console.log(foo, bar);
// Output: 1 2

/*  @N/B
Symbols and BigInts cannot be faithfully polyfilled, so they should not be used when targeting browsers/environments that don’t support them natively.
*/

/*
1.2 Complex: When you access a complex type you work on a reference to its value
  1. Object
  2. Array
  3. Function
*/

// Array
const foz  = [1, 2]
const baz = foz;
baz.push(3);
console.log(foz, baz);
// Output: [1, 2, 3] [1, 2, 3]

// Object
const foobar = { foo: 1, bar: 2 };
const barfoo = foobar;
barfoo.bar = 3;
console.log(foobar, barfoo);
// Output: { foo: 1, bar: 3 } { foo: 1, bar: 3 }

// Function
const barz = (a, b) => a + b;
const qux = barz;
qux(2, 3);
console.log(barz(2, 3));
// Output: 5