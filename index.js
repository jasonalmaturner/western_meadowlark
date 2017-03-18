// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
- Play audio from an amusing scene between Luke Skywalker, R2-D2 and Yoda
- When the audio reaches the end, play it again from the beginning.
*********************************************/

var path = require('path');
var av = require('tessel-av');
var mp3 = path.join(__dirname, 'yoda-mudhole.mp3');
var sound = new av.Player();

sound.play(mp3);

sound.on('ended', function() {
  sound.play();
});
