<h1 align="center">Controllerhawk</h1>

<p align="center">The controller/gamepad version of keyhawk, manage your game's keybinds for users using a controller.<p>

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

| param                   | type    | description                                                                                           | default |
|-------------------------|---------|-------------------------------------------------------------------------------------------------------|---------|
| options                 | Object  |                                                                                                       | {}      |
| options.disableGameLoop | boolean | Indicates if Controllerhawk should not use its internal game loop for updating the controller values. | false   |

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
// Using the built in game loop:
const controllerhawk = new Controllerhawk();

// Using your own game loop:
const controllerhawk = new Controllerhawk({ disableGameLoop: true });
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

The important thing to note here is that all 3 will do the same thing but you only have to define 1. Even if you just define a keybind for a ps4 controller, it will work with the corresponding button on the xbox controller or steam controller or any other standard controller.

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

const greet = controllerhawk.keybind(controllerhawk.BUTTON.PS4.X).action(hello);
```

This will run the `hello` method everytime the keybind is active.

Notice how `action` can be chained, this is because `keybind` returns an instance of the keybind and so it could be written as:

```js
const hello = () => {
  console.log('Hello!');
}

const greet = controllerhawk.keybind(controllerhawk.BUTTON.PS4.X);

greet.action(hello);
```

## **Using the Analog Sticks**

Most analog sticks on controllers can be pressed so they can also be assigned as buttons to keybinds like with any of the buttons shown above.

However, you probably also want to map movement so you need to know the direction the analog sticks are facing and with how much force. This is where the `leftAnalogStick` and `rightAnalogStick` properties come into play.

These two properties both contain a `x` and `y` property are constantly being updated and the values returned from these will be between -1 and 1. Note that your analog sticks are probably not perfectly aligned and do not sit at 0 and most instead they sit somewhere around -0.01 and 0.01 and it is recommended to check for values beyond that such as `controllerhawk.leftAnalogStick.x > 0.5`.

**x**: The amount that the stick is being pushed in the horizontal direction. A value of -1 will mean the stick is fully to the left while a value of 1 means that the stick is fully to the right and 0 is in the middle.
**y**: The amount that the stick is being pushed in the vertical direction. A value of -1 will mean the stick is fully in the up position while a value of 1 means that the stick is fully in the down position and again 0 is in the middle.

```js
const move = () => {
  sprite.position.x += controllerhawk.leftAnalogStick.x;
};

const jump = () => {
  sprite.position.y += 5 * controllerhawk.rightAnalogStick.y;
};
```

## **Using Your Own Game Loop**

Controllerhawk uses `requestAnimationFrame` interally in order to check for the most up to date values passed from the controller. If you have a game loop running already you may want to bundle the updating that Controllerhawk already does along with it.

In order to do this, you need to set the `disableGameLoop` initialization value to `true` so that Controllerhawk doesn't use the internal loop.

Now to pass it to your own loop, you need to use the `update` method and pass in the current time, which if you're using `requestAnimationFrame` is provided as a parameter.

```js
const controllerhawk = new Controllerhawk({ disableGameLoop: true });

function update(time) {
  controllerhawk.update(time);

  requestAnimationFrame(update);
}

requesetAnimationFrame(update); // Or you could do update(0);
```

## **Examples**

This will be updated with examples using various game engines and templates:

- [Phaser2](#examples/phaser2.md)

## **Tests**

To run the tests for Controllerhawk use:

```bash
npm run test
```

Then in a browser navigate to 'localhost:8888/test/index.html' and you'll be able to see a running demo using a controller.

## **License**

MIT