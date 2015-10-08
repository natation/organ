/* global React, TONES, KeyNote */

(function(root) {
  'use strict';
  var Organ = root.Organ = React.createClass({
    render: function () {
      var keyNames = Object.keys(TONES);
      return (
        <ul className="organ">
          {
            keyNames.map(function (keyName) {
              return <li><KeyNote noteName={keyName} key={TONES[keyName]}/></li>;
            })
          }
        </ul>
      );
    }
  });
}(this));
