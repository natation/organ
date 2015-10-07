/* global EventEmitter, StoreConstants, AppDispatcher, NoteConstants */

(function(root) {
  'use strict';
  var _notes = [];

  var NoteStore = root.NoteStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _notes.slice();
    },

    createNote: function (note) {
      _notes.push(note);
      NoteStore.changed();
    },

    destroyNote: function (note) {
      var noteIdx = _notes.indexOf(note);
      if (noteIdx !== -1) {
        _notes.splice(noteIdx, 1);
        NoteStore.changed();
      }
    },

    changed: function () {
      NoteStore.emit(StoreConstants.CHANGE_EVENT);
    },

    addChangeHandler: function (handler) {
      NoteStore.on(StoreConstants.CHANGE_EVENT, handler);
    },

    removeChangeHandler: function (handler) {
      NoteStore.removeListener(StoreConstants.CHANGE_EVENT, handler);
    },

    dispatchId: AppDispatcher.register(function (action) {
      switch (action.actionType) {
        case NoteConstants.CREATE_NOTE:
          this.createNote(action.noteName);
          break;
        case NoteConstants.DESTROY_NOTE:
          this.destroyNote(action.noteName);
          break;
      }
    })
  });
}(this));
