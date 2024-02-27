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
b = 2;
console.log(a, b);
// Output: 1 2

/*
2.2 If you must reassign references, use let instead of var.
eslint no-var: "error",
https://eslint.org/docs/latest/rules/no-var
*/
