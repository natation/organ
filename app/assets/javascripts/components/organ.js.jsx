/* global React, TONES, KeyNote */

(function(root) {
  'use strict';
  var Organ = root.Organ = React.createClass({
    render: function () {
      var keyNames = Object.keys(TONES);
      return (
        <div className="organ">
          {
            keyNames.map(function (keyName) {
              return <KeyNote noteName={keyName} key={TONES[keyName]}/>;
            })
          }
        </div>
      );
    }
  });
}(this));
