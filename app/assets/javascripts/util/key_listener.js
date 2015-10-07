(function(root) {
  'use strict';
  var KeyListener = root.KeyListener = React.createClass({
    handleKeyDown: function (e) {
      KeyActions.keyPressed(e.key);
    },
    handleKeyUp: function (e) {
      KeyActions.keyUnpressed(e.key);
    },
    render: function () {
      React.createElement(div, {className: "key-listener",
                                onKeyDown: this.handleKeyDown,
                                onKeyUp: this.handleKeyUp})
    }
  });
}(this));
