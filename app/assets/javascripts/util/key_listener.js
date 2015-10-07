/* global KeyActions */

(function(root) {
  'use strict';

  var handleKeyDown = function (e) {
    KeyActions.keyPressed(e.key);
  };

  var handleKeyUp = function (e) {
    KeyActions.keyUnpressed(e.key);
  };

  $(document).keydown(handleKeyDown);
  $(document).keyup(handleKeyUp);
}(this));
