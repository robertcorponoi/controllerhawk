'use strict'

import ControllerHawk from '../controllerhawk.js';

const ch = new ControllerHawk();

const jump = ch.keybind(ch.BUTTONS.PS4.X);

const hello = () => console.log('hello!');

jump.action(hello);