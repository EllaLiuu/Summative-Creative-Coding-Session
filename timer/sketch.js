var input;
var timeleft = 0;
var button;
var interval;

var startTime = 0;
var currentTime = 0;

function convertSeconds(s) {
  var min = floor(s / 60);
  var sec = s % 60;
  return nf(min, 2) + ':' + nf(sec, 2);
}

function setup() {
  noCanvas();
  var num = 0;
	input = createInput();
	button = createButton('submit');
	button.mousePressed(newTime);
  button.mousePressed(startTimer);

	function newTime() {
		var num = input.value();
	}



  var timer = select('#timer');
  timer.html(convertSeconds(timeleft - currentTime));

function startTimer(){
  startTime = millis();
  interval = setInterval(timeIt, 1000);
  timeleft = input.value();

}

  function timeIt() {
    currentTime = floor((millis() - startTime) / 1000);
    timer.html(convertSeconds(timeleft - currentTime));

    if (currentTime == timeleft) {
      clearInterval(interval);
      createP("Times Up!");
      //counter = 0;
  }
  }
}
