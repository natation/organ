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
        case 'q':
          return 'A';
        case '2':
          return 'Bb';
        case 'w':
          return 'B';
        case 'e':
          return 'C';
        case '4':
          return 'Db';
        case 'r':
          return 'D';
        case '5':
          return 'Eb';
        case 't':
          return 'E';
        case 'y':
          return 'F';
        case '7':
          return 'Gb';
        case 'u':
          return 'G';
        case '8':
          return 'Ab';
        case 'i':
          return 'A2';
        case '9':
          return 'Bb2';
        case 'o':
          return 'B2';
        case 'p':
          return 'C2';
        default:
          return '';
      }
    }
  };
}(this));
