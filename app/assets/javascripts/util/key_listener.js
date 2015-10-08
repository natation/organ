/* global KeyActions */

(function(root) {
  'use strict';

  var handleKeyDown = function (e) {
    KeyActions.keyPressed(String.fromCharCode(e.keyCode).toLowerCase());
  };

  var handleKeyUp = function (e) {
    KeyActions.keyUnpressed(String.fromCharCode(e.keyCode).toLowerCase());
  };

  $(document).keydown(handleKeyDown);
  $(document).keyup(handleKeyUp);
}(this));
