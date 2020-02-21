'use strict'

/**
 * Defines the data related to an analog stick.
 */
export default interface AnalogStick {
  /**
   * Indicates the x value of this stick's position.
   * 
   * This is a value between -1 and 1 with -1 being fully to the left and 1 being fully to the right.
   */
  x: number;

  /**
   * Indicates the y value of this stick's position.
   * 
   * This is a value between -1 and 1 with 1 being fully to the bottom and -1 being fully to the top.
   */
  y: number;
}