# **Phaser 2 Example**

Below is an example of a demo straight from the the Phaser 2 examples:

Some things to notice:

- The `disableGameLoop` option is set to true because we are going to use Phaser's game loop.
- The default jump functionality has been replaced with a keybind created for jumping using the bottom quad button (X on ps4 or A on xbox).
- The movement functionality is replaced to use the x value from the `leftAnalogStick` property.
- A fun little keybind to test multiple button keybinds is created using the two trigger buttons of the xbox controller while the jump button is created using a button from the ps4 controller. This is to showcase that it doesn't matter what controller the button is from it will work with the matching button on another controller. The controller button combo is just for easier reference.

```js
'use strict'

import Controllerhawk from '../controllerhawk.js';

const controllerhawk = new Controllerhawk({ disableGameLoop: true });

// Test a single button keybind.
controllerhawk.keybind(controllerhawk.BUTTONS.PS4.X).action(jump);

// Test a double button keybind.
controllerhawk.keybind(controllerhawk.BUTTONS.XBOX.LEFT_TRIGGER, controllerhawk.BUTTONS.XBOX.RIGHT_TRIGGER).action(rotate);

let map;
let tileset;
let layer;
let player;
let facing = 'left';
let jumpTimer = 0;
let cursors;
let jumpButton;
let bg;

/**
 * Define the properties of the game.
 */
const game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

/**
 * Define all of the assets that need to be loaded before the game starts.
 */
function preload() {
  game.load.tilemap('level1', 'assets/level1.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.image('tiles-1', 'assets/tiles-1.png');
  game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
  game.load.spritesheet('droid', 'assets/droid.png', 32, 32);
  game.load.image('starSmall', 'assets/star.png');
  game.load.image('starBig', 'assets/star2.png');
  game.load.image('background', 'assets/background2.png');
}

/**
 * When the game is created, we set up the map and the initial physics properties of the game.
 */
function create() {
  game.physics.startSystem(Phaser.Physics.ARCADE);

  game.stage.backgroundColor = '#000000';

  bg = game.add.tileSprite(0, 0, 800, 600, 'background');
  bg.fixedToCamera = true;

  map = game.add.tilemap('level1');

  map.addTilesetImage('tiles-1');

  map.setCollisionByExclusion([13, 14, 15, 16, 46, 47, 48, 49, 50, 51]);

  layer = map.createLayer('Tile Layer 1');

  //  Un-comment this on to see the collision tiles
  // layer.debug = true;

  layer.resizeWorld();

  game.physics.arcade.gravity.y = 250;

  player = game.add.sprite(32, 32, 'dude');
  game.physics.enable(player, Phaser.Physics.ARCADE);

  player.body.bounce.y = 0.2;
  player.body.collideWorldBounds = true;
  player.body.setSize(20, 32, 5, 16);

  player.animations.add('left', [0, 1, 2, 3], 10, true);
  player.animations.add('turn', [4], 20, true);
  player.animations.add('right', [5, 6, 7, 8], 10, true);

  game.camera.follow(player);

  cursors = game.input.keyboard.createCursorKeys();
  // jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
}

/**
 * Define what happens at every frame of the game.
 */
function update() {
  controllerhawk.update();

  game.physics.arcade.collide(player, layer);

  player.body.velocity.x = 0;

  if (controllerhawk.leftAnalogStick.x < -0.5) {
    player.body.velocity.x = -150;

    if (facing != 'left') {
      player.animations.play('left');
      facing = 'left';
    }
  } else if (controllerhawk.leftAnalogStick.x > 0.5) {
    player.body.velocity.x = 150;

    if (facing != 'right') {
      player.animations.play('right');
      facing = 'right';
    }
  } else {
    if (facing != 'idle') {
      player.animations.stop();

      if (facing == 'left') player.frame = 0;
      else player.frame = 5;

      facing = 'idle';
    }
  }
}

/**
 * Enable debugging properties for the player character.
 */
function render() {
  game.debug.text(game.time.physicsElapsed, 32, 32);
  game.debug.body(player);
  game.debug.bodyInfo(player, 16, 24);
}

/**
 * Jump when the X or A button is pressed.
 */
function jump() {
  if (player.body.onFloor() && game.time.now > jumpTimer) {
    player.body.velocity.y = -250;
    jumpTimer = game.time.now + 750;
  }
}

/**
 * Rotate the character 90 degrees when both triggers are pressed.
 */
function rotate() {
  player.body.rotation += 90;
}
```