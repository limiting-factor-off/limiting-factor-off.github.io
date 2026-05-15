// Javascript Hell starts here DO NOT JUDGE

// Video Assets
var bootUpVideo = document.getElementById("bootUpVideo");

// Audio Assets
var bootUpAudio = new Audio("assets/audio/boot-up.mp3");
var computerFans = new Audio("assets/audio/computer-fans.mp3");
var error = new Audio("assets/audio/error.mp3");
var floppyDisk = new Audio("assets/audio/floppy-disk-insert.mp3");

console.log('Script Loaded')
// alert('Script Working')
// Boot Up Sequence

var skipSequence = false;

function playBootUpSequence() {
  if (skipSequence === false) {
    console.log("Playing boot up sequence...");
    floppyDisk.play();
    setTimeout(() => {
      computerFans.play();
      bootUpVideo.style.display = 'flex'
      bootUpVideo.play();
    }, 2000);

    bootUpVideo.addEventListener('ended', (event) => {
      bootUpVideo.style.display = 'none'
      bootUpAudio.play();
    });

  }
  else {
    console.log("Boot Up Skipped")
}}

playBootUpSequence();