(function(root) {
  'use strict';

  var AudioContext = root.AudioContext || root.webkitAudioContext;
  var ctx = new AudioContext();

  var Note = root.Note = function(frequency) {
    var createOscillator = function (freq) {
      var osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq;
      osc.detune.value = 0;
      osc.start(ctx.currentTime);
      return osc;
    };

    var createGainNode = function () {
      var gainNode = ctx.createGain();
      gainNode.gain.value = 0;
      gainNode.connect(ctx.destination);
      return gainNode;
    };

    this.oscillatorNode = createOscillator(frequency);
    this.gainNode = createGainNode();
    this.oscillatorNode.connect(this.gainNode);
  };

  Note.prototype.start = function () {
    this.gainNode.gain.value = 0.3;
  };

  Note.prototype.stop = function () {
    this.gainNode.gain.value = 0;
  };
}(this));
