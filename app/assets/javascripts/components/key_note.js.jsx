/* global React, Note, TONES, KeyListener, NoteStore */

(function(root) {
  'use strict';
  var KeyNote = root.KeyNote = React.createClass({
    componentDidMount: function () {
      this.note = new Note(TONES[this.props.noteName]);
      NoteStore.addChangeHandler(
        this.handlePress.bind(null, this.props.noteName)
      );
    },

    handlePress: function (noteName) {
      var noteIdx = NoteStore.all().indexOf(noteName);
      if (noteIdx === -1) {
        this.note.stop();
      } else {
        this.note.start();
      }
    },

    render: function () {
      return (
        <div className="keynote">
        </div>
      );
    }
  });
}(this));
