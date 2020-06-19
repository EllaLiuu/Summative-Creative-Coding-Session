var data;

var txt = '&&Exclamation&&! they said &&Adverb&& as they jumped into their &&Noun&& and flew off with their &&Adjective&& &&PluralNoun&&.';

function setup() {
  
  noCanvas();
  
  Papa.parse('https://docs.google.com/spreadsheets/d/1ALVeZuNm9OZx31Ru3lKOxNmlo3A4N7PMqi6f4vUJF_4/pub?output=csv', {
          download: true,
          header: true,
          complete: gotData
        })
  
  var button = createButton('Generate Mad Lib');
  button.mousePressed(generate);
 
}

function gotData(results) {
            data = results.data
            //console.log(data)
          }

function replacer(match,pos) {
  var entry = random(data);
  return entry[pos];
}

function generate(){
  var madlib = txt.replace(/&&(.*?)&&/g, replacer);    createP(madlib);
}
             
