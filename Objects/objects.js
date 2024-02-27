// Objects

/*
3.1 Use the literal syntax for object creation.
eslint:
  eslint no-object-constructor: "error",
  eslint no-new-object: "error",
  https://eslint.org/docs/latest/rules/no-object-constructor
  https://eslint.org/docs/latest/rules/no-new-object
*/

// This is Bad
const itemBad = new Object();

// This is Good
const itemGood = {};

/*
3.2 Use computed property names when creating objects with dynamic property names
*/

function getKey(k) {
  return `a key named ${k}`;
}

// This is bad
const objBad = {
  id: 5,
  name: "Newton"
};
obj[getKey('enabled')] = true;

// This is good
const objGood = {
  id: 5,
  name: "Newton",
  [getKey('enabled')]: true
};

console.log(objBad);
console.log(objGood);

/*
3.3 Use object method shorthand.
eslint:
  eslint object-shorthand: "error",
  https://eslint.org/docs/latest/rules/object-shorthand
*/

// This is Bad
const atomBad = {
  value: 1,

  addValue: function(value) {
    return atom.value + value;
  }
}

// This is good
const atomGood = {
  value: 1,
  addValue(value) {
    return atom.value + value;
  }
}

/*
3.4 Use property value shorthand.
eslint:
  eslint object-shorthand: "error",
  https://eslint.org/docs/latest/rules/object-shorthand
*/

const bofulo = "Newton";

// This is bad
const atomWrong = {
  bofulo: bofulo,
}

// This is good
const atomRight = {
  bofulo,
}

/*
3.5 Group your shorthand properties at the beginning of your object declaration.
*/

const newton = 'Newton';
const Bofuh = 'Bofulo';

// This is bad
const atomBad2 = {
  episodeOne: 1,
  newton,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  episodeFour: 4,
  Bofuh,
}

// This is good
const atomGood2 = {
  newton,
  Bofuh,
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  episodeThree: 3,
  episodeFour: 4,
}

/*
3.6 Only quote properties that are invalid identifiers.
eslint:
  eslint quote-props: ["error", "always"]
  https://eslint.org/docs/latest/rules/quote-props
*/

// This is a bad one
const bad = {
  'foo': 3,
  'bar': 4,
  'data-blah': 5,
}

const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
}


