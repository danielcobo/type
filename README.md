# type

Bulletproof type checking for JavaScript. Think of it as an expanded version of the native [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) function. The module recognizes types that `typeof` does but also many more that `typeof` clunks together in a less useful way.

## 🧭 Table of contents
- [🧭 Table of contents](#-table-of-contents)
- [✨ Benefits](#-benefits)
- [🎒 Requierments](#-requierments)
- [🚀 Quickstart](#-quickstart)
- [📘 Documentation](#-documentation)
  - [Types that are part of the native `typeof` function](#types-that-are-part-of-the-native-typeof-function)
  - [Types that are NOT part of the native `typeof` function](#types-that-are-not-part-of-the-native-typeof-function)
  - [Custom types](#custom-types)
- [🆘 Troubleshooting](#-troubleshooting)
- [🤝 Contributing](#-contributing)
- [🧪 Testing](#-testing)
- [⚖️ License](#️-license)

## ✨ Benefits

- recognizes native JS types in more detail
- recognizes custom object types

## 🎒 Requierments

There are no special prerequisites.

## 🚀 Quickstart

### Install

```cli
npm install @danielcobo/type
```

Or use [UNPKG](https://unpkg.com/) to include the script.
The examples below will assume you use [npm](https://www.npmjs.com/)

<sub>**Note:** In case you're wondering, **@danielcobo/** is just a [namespace scope](https://docs.npmjs.com/about-scopes/) - an NPM feature. Scopes make it easier to name modules and improve [security](https://github.blog/2021-02-12-avoiding-npm-substitution-attacks/).</sub>

### Use the module

```js
const typeOf = require('@danielcobo/type');

const bestTimeToStart = new Date()
typeOf(bestTimeToStart);  //date
```

For details see documentation below.

## 📘 Documentation

Returns type name of input value.

| Param       | Type     | Description             |
| ----------- | -------- | ----------------------- |
| val         | Any      | Input value             |

| Returns     | Type     | Description             |
| ----------- | -------- | ----------------------- |
| type        | `string` | Type of the input value |

### Types that are part of the native `typeof` function

```js
typeOf(1n);              //bigint
typeOf(true);            //boolean
typeOf(false);           //boolean
typeOf(function () {});  //function
typeOf(1);               //number
typeOf(0.1);             //number
typeOf('hello string');  //string

const noDefinition = undefined;
let noDefinitionEither;
typeOf(noDefinition);        //undefined
typeOf(noDefinitionEither);  //undefined
typeOf());                   //undefined
typeOf(undefined);           //undefined
```

### Types that are NOT part of the native `typeof` function

```js
typeOf(arguments);          //arguments
typeOf([]);                 //array
typeOf(Buffer.alloc(43));   //buffer
typeOf(new Date());         //date
typeOf(NaN);                //NaN
typeOf(null);               //null
typeOf(/regex/);            //regex
```

### Custom types

Custom object classes will give you custom types.

```js
class Robot {
  constructor(name, side) {
    this.name = name;
    this.side = side;
  }
}
const metroplex = new Robot('Metroplex', 'autobot');
typeOf(metroplex); //robot
```

## 🆘 Troubleshooting

If you run into trouble or have questions just [submit an issue](https://github.com/danielcobo/fs/issues).

## 🤝 Contributing

### Anyone can contribute

Contributions come in many shapes and sizes. All are welcome.
You can contribute by:

- asking questions
- suggesting features
- sharing this repo with friends
- improving documentation (even fixing typos counts 😉)
- providing tutorials (if you do, please [let me know](https://twitter.com/danielcobocom), I would love to read them)
- improving tests
- contributing code (new features, performance boosts, code readability improvements..)

### Rules for contributions

**General guidelines:**

- there are no dumb questions
- be polite and respectful to others
- do good

**When coding remember:**

- working > maintainability > performance
- best code is no code
- be descriptive when naming
- keep it [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
- do test

**Contribution licence:**
All contributions are considered to be under same [license](#license) as this repository.

## 🧪 Testing

**Testing suite:** [🃏 Jest](https://jestjs.io) | **Test command:** `npm test`

**Mutation testing suite:** [👽 Stryker Mutator](https://stryker-mutator.io) | **Mutation test command:** `npm run mutate`

If you intend to develop further or contribute code, then please ensure to write and use testing. Strive for 100% code coverage and high mutation scores. Mutation score 100 is great, but it's not always neccessary (if there are valid reasons).

## ⚖️ License

[MIT License](https://github.com/danielcobo/type/blob/master/LICENSE.md)
