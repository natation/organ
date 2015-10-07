/* global AppDispatcher, NoteConstants */

(function(root) {
  'use strict';

  var KeyActions = root.KeyActions = {
    keyPressed: function (key) {
      AppDispatcher.dispatch({
        actionType: NoteConstants.CREATE_NOTE,
        noteName: this._findNote(key)
      });
    },

    keyUnpressed: function (key) {
      AppDispatcher.dispatch({
        actionType: NoteConstants.DESTROY_NOTE,
        noteName: this._findNote(key)
      });
    },

    _findNote: function(key) {
      switch (key) {
        case 'a':
          return 'A';
        case 'w':
          return 'Bb';
        case 's':
          return 'B';
        case 'd':
          return 'C';
        case 'r':
          return 'Db';
        case 'f':
          return 'D';
        case 't':
          return 'Eb';
        case 'g':
          return 'F';
        case 'y':
          return 'Gb';
        case 'h':
          return 'G';
        case 'u':
          return 'Ab';
        case 'j':
          return 'A2';
        default:
          return '';
      }
    }
  };
}(this));
