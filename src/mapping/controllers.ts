'use strict'

import ps4 from './ps4';
import xbox from './xbox';
import generic from './generic';

/**
 * Imports all of the individual mappings and provides a way to access any supported controller layout.
 */
export default {
  /**
   * The layout for the ps4 controller.
   */
  PS4: ps4,

  /**
   * The layout for the general xbox/xbox360 controller.
   */
  XBOX: xbox,

  /**
   * The layout for a generic controller.
   */
  GENERIC: generic
}