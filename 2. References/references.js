// References

/*
2.1 Use const for all your references; avoid using var.
eslint: "no-var": "error",
eslint prefer-const: "error",
eslint no-const-assign: "error",
https://eslint.org/docs/rules/prefer-const
https://eslint.org/docs/rules/no-const-assign
*/

const a = 1;
const b = a;
// b = 2; // This will result to a TypeError: Assignment to constant Variable.
console.log(a, b);
// Output: 1 2

/*
2.2 If you must reassign references, use let instead of var.
eslint no-var: "error",
https://eslint.org/docs/latest/rules/no-var
*/

let count = 1;
count = 2;
if (true && count) {
  count = 3;
}
console.log(count);
// Output: 2

/*
2.3 Both let and const are block-scoped, whereas var is function-scoped.
*/

{
  let m = 1;
  const n = 2;
  var o = 3;
}

console.log(m, n, o);
// Output: 1 2 3
/* You'll get this:
  ReferenceError: m is not Defined
  ReferenceError: n is not Defined
  ReferenceError: o will print 3
*/