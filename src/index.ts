'use strict'

import Controllers from './interfaces/Controllers';

/**
 * Makes it easy for you to map controllers for your game.
 */
export default class ControllerHawk {
  /**
   * A reference to the controllers connected.
   * 
   * @private
   * 
   * @property {Controllers}
   */
  private _controllers: Controllers = {};

  constructor() {
    this._boot();
  }

  /**
   * Maps a contoller button bind to an action.
   */

  /**
   * Adds the necessary event listeners detecting a gamepad connecting and disconnecting.
   * 
   * @private
   */
  private _boot() {
    window.addEventListener('gamepadconnected', (ev: any) => this._onconnect(ev.gamepad));
    window.addEventListener('gamepaddisconnected', (ev: any) => this._ondisconnect(ev.gamepad));
  }

  /**
   * Adds the connected controller to the `_controllers` property and then start the game loop to update the status of 
   * buttons pressed/thumbsticks moved.
   * 
   * @private
   * 
   * @param {Event} ev The `gamepadconnected` event object.
   */
  private _onconnect(gamepad: Gamepad) {
    this._controllers[gamepad.index] = gamepad;

    requestAnimationFrame(() => this._update());
  }

  /**
   * Removes the disconnected controller from the `_controllers` property.
   * 
   * @private
   * 
   * @param {Event} ev The `gamepaddisconnected` event object.
   */
  private _ondisconnect(gamepad: Gamepad) {
    delete this._controllers[gamepad.index];
  }

  /**
   * Checks to see if there are any gamepads that need to be added and performs controller actions.
   * 
   * @private
   */
  private _update() {
    this._scan();

    requestAnimationFrame(() => this._update());
  }

  /**
   * Scans for new controllers and if so it adds them to the `_controllers` property or updates the current references.
   * 
   * @private
   */
  private _scan() {
    const gamepads: Array<Gamepad|null> = navigator.getGamepads();

    gamepads.map(gamepad => {
      if (!gamepad) return;

      if (!(gamepad.index in this._controllers)) this._onconnect(gamepad);
      else this._controllers[gamepad.index] = gamepad;
    });
  }
}