var data
var lexicon;


var txt = 'Yesterday, on our way to the &&jj&& park, we saw a &&jj&& &&nn&& on a bike. We also saw big &&jj&& ballons tied to a &&nn&&. George and I &&rb&& &&vbd&& all the way home.';


function setup (){
    noCanvas();
	var button = createButton('Generate Mad Lib!');
	lexicon = new RiLexicon();
	button.mousePressed(generate);

}

function replacer(match,pos) {
	var entry = lexicon.randomWord(pos);
	return entry;

}

function generate() {
	var madlib = txt.replace(/&&(.*?)&&/g, replacer);
	createP(madlib);
}

