var kick1 = new Audio('audio/kick1.mp3');
var kick2 = new Audio('audio/kick2.mp3');
var kick3 = new Audio('audio/kick3.mp3');

var clap1 = new Audio('audio/clap1.mp3');
var clap2 = new Audio('audio/clap2.mp3');
var clap3 = new Audio('audio/clap3.mp3');

var cymbal1 = new Audio('audio/cymbal1.mp3');
var cymbal2 = new Audio('audio/cymbal2.mp3');
var cymbal3 = new Audio('audio/cymbal3.mp3');

var percussion1 = new Audio('audio/percussion1.mp3');
var percussion2 = new Audio('audio/percussion2.mp3');
var percussion3 = new Audio('audio/percussion3.mp3');

function kick() {
  if($('#kick1').is(':checked')) {
    kick1.play();
  } else if($('#kick2').is(':checked')) {
    kick2.play();
  } else if($('#kick3').is(':checked')) {
    kick3.play();
  }
}

function clap() {
  if($('#clap1').is(':checked')) {
    clap1.play();
  } else if($('#clap2').is(':checked')) {
    clap2.play();
  } else if($('#clap3').is(':checked')) {
    clap3.play();
  }
}

function cymbal() {
  if($('#cymbal1').is(':checked')) {
    cymbal1.play();
  } else if($('#cymbal2').is(':checked')) {
    cymbal2.play();
  } else if($('#cymbal3').is(':checked')) {
    cymbal3.play();
  }
}

function percussion() {
  if($('#perc1').is(':checked')) {
    percussion1.play();
  } else if($('#perc2').is(':checked')) {
    percussion2.play();
  } else if($('#perc3').is(':checked')) {
    percussion3.play();
  }
}

window.setInterval(function(){
  kick();
  setTimeout(clap, 1000);
  setTimeout(cymbal, 2000);
  setTimeout(percussion, 3000);
}, 4000);
