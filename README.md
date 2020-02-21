<h1 align="center">Controllerhawk</h1>

<p align="center">The gamepad version of keyhawk, manage your game's keybinds for users using a controller.<p>

<div align="center">

[![NPM version](https://img.shields.io/npm/v/controllerhawk.svg?style=flat)](https://www.npmjs.com/package/controllerhawk)
[![Known Vulnerabilities](https://snyk.io/test/github/robertcorponoi/controllerhawk/badge.svg)](https://snyk.io/test/github/robertcorponoi/controllerhawk)
![npm](https://img.shields.io/npm/dt/controllerhawk)
[![NPM downloads](https://img.shields.io/npm/dm/controllerhawk.svg?style=flat)](https://www.npmjs.com/package/controllerhawk)
<a href="https://badge.fury.io/js/controllerhawk"><img src="https://img.shields.io/github/issues/robertcorponoi/controllerhawk.svg" alt="issues" height="18"></a>
<a href="https://badge.fury.io/js/controllerhawk"><img src="https://img.shields.io/github/license/robertcorponoi/controllerhawk.svg" alt="license" height="18"></a>
[![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/robertcorponoi)

</div>

Controllerhawk lets you easily and quickly create controller based keybinds for your javascript game. Keybinds are created by assigning one or more buttons to be bound and then passing a function that should be run when the buttons associated with the keybind are used.

## **Installation**

Controllerhawk is an ES6 module that can be used by downloading the package through NPM:

```
$ npm install controllerhawk
```

## **Initialization**

Controllerhawk upon initialization can be passed an options object and for now there is just one option that can be specified.

| param           | type    | description                                                                                                                                                                                              | default |
|-----------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| options         | Object  |                                                                                                                                                                                                          | {}      |
| options.useLoop | boolean | Indicates whether Controllerhawk should use the default game loop module for checking if a keybind is actively being used. If this is false then you will need to use your own game loop as shown below. | true    |

```js
// Webpack
import Controllerhawk from 'controllerhawk';

// Browser
import Controllerhawk from './path/to/controllerhawk.js';
```

Or you can use it from unpkg like so:

```html
<script type="module" src="https://unpkg.com/controllerhawk@latest/controllerhawk.js">
```

and then lastly you have to initialize it:

```js
// Using your own game loop:
const controllerhawk = new Controllerhawk();

// Using the built in game loop:
const controllerhawk = new Controllerhawk({ useLoop: true });
```

## **Creating Keybinds**

To create a new keybind, you start out by using the `keybind` method which takes a variable amount of arguments depending on how many keys you want to use.

The keys that can be assigned to a keybind should be derived from the `controllerhawk.BUTTONS` object.

**Note:** The when selecting buttons to assign to a keybind, the `instance.BUTTONS` property has three properties of its own, `PS4`, `XBOX` and `GENERIC`. These are more of a convenience so that you can imagine the keybinds better but they will match up with similar buttons on any controller. Here is what the generic gamepad looks like and which all controller layouts will be mapped to:

<img width="500" height="375" src="./images/standard_gamepad.svg">

Now let's say we have a basic keybind

An example of creating a single key keybind can be done as shown:

```js
// X or cross button on ps4 which ties in to A on xbox or just the botton button on a generic controller.
const jump = controllerhawk.keybind(controllerhawk.BUTTON.PS4.X);

// We could have also defined it as this:
const jump = controllerhawk.keybind(controllerhawk.BUTTON.XBOX.A);

// Lastly with the generic layout:
const jump = controllerhawk.keybind(controllerhawk.BUTTON.GENERIC.QUAD_BUTTON_BOTTOM);
```

The important thing to note here is that all 3 will do the same thing but you only have to define 1. Even if you just define a keybind for a ps4 controller, it will work with the corresponding button on the xbox controller or steam controller.

You can also add multiple keys by just supplying more parameters like so:

```js
const special = controllerhawk.keybind(controllerhawk.BUTTON.PS4.LEFT_TRIGGER, controllerhawk.BUTTON.PS4.RIGHT_TRIGGER);
```

**Note:** Order of the keys does not matter.

Now a keybind on its own doesn't do much as there's no action associated with it. To add a function to run when the keybind is active, you can specify an action:

```js
const hello = () => {
  console.log('Hello!');
}

const greet = keyhawk.keybind(controllerhawk.BUTTON.PS4.X).action(hello);
```

This will run the `hello` method everytime the keybind is active.

Notice how `action` can be chained, this is because `keybind` returns an instance of the keybind and so it could be written as:

```js
const hello = () => {
  console.log('Hello!');
}

const greet = keyhawk.keybind(controllerhawk.BUTTON.PS4.X);

greet.action(hello);
```

## **Using Your Own Game Loop**

If you are already using a game loop for another purpose then you should set the `useLoop` option to `false` so that the Keyhawk game loop and your game loop aren't both running at the same time. Keyhawk exposes the `update` method which is what checks for active keybinds and you can call that within your project inside of your game loop.

```js
const keyhawk = new Keyhawk({ useLoop: false });

// Set up your keybinds here...

// And inside of your game loop, call the following method providing the current time from your loop:
keyhawk.check(time);
```

## **Tests**

To run the tests for Keyhawk use:

```bash
npm run test
```

**Note:** The keyhawk tests run in the browser so once you run the test command and the localhost server starts up, you have to open up a browser and navigate to 'localhost:8888/test/index.html' and then you'll be able to see all of the tests.

## **License**

MIT