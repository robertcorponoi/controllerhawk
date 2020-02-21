'use strict'

/**
 * Describes the object that holds all of the controllers connected.
 */
export default interface Controllers {
  /**
   * The number of the controller connected and its Gamepad object.
   */
  [key: number]: Gamepad;
}
