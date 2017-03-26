var bpm = 125;
var note = ((1/(bpm*1/60))*1000)*4;

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

function Timer(func, delay) {
  this.handle = 0;
  this.func = func;
  this.delay = delay;
}
Timer.prototype.start = function(newDelay) {
  if (typeof newDelay !== "undefined") {
    this.delay = newDelay;
  }
  //this.stop();
  this.handle = setInterval(this.func, this.delay);
  return this;
}
Timer.prototype.stop = function(newDelay) {
  if (this.handle) {
    clearTimeout(this.handle);
    this.handle = 0;
  }
  return this;
}

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

$("#bpmBar").change(function(){
  bpm = $(this).val();
  note = ((1/(bpm*1/60))*1000)*4;
  for (i = timers.length - 1; i >= 0; i--) {
    var timing = 1;
    for (j = 0; j < i; j++) {
      timing = timing/2;
    }
    timers[i].stop();
    timers[i].start(timing);
  }
});

var eighthTimer = new Timer(cymbal, (1/8)*note);
var quarterTimer = new Timer(kick, (1/4)*note);
var halfTimer = new Timer(clap, (1/2)*note);
var fullTimer = new Timer(percussion, note);
var timers = [eighthTimer, quarterTimer, halfTimer, fullTimer];

for (i = 0; i < timers.length; i++) {
  timers[i].start();
}
