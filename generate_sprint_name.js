let adjectives = require('./adjectives');
const nouns = require('./nouns');


if(process.argv.length > 2){
	
	var resultCount = 1;
	var startLetter = '';
	if(isNaN(process.argv[2])){
		startLetter = process.argv[2].trim().toUpperCase();
		adjectives = adjectives.filter((adj) => adj.startsWith(startLetter));
	} else{
		resultCount = process.argv[2];
	}
	
	if(process.argv.length > 3){
		if(isNaN(process.argv[3]) && startLetter === ''){
			startLetter = startLetter === '' ? process.argv[3].trim().toUpperCase() : startLetter;
			adjectives = adjectives.filter((adj) => adj.startsWith(startLetter));
		} else if(!isNaN(process.argv[3]) && resultCount === 1){
			resultCount = process.argv[3];
		}
	}
	
	while(resultCount > 0){
		console.log(getRandomItem(adjectives) + " " + getRandomItem(nouns));
		resultCount--;
	}
	
} else{
	console.log(getRandomItem(adjectives) + " " + getRandomItem(nouns));
}

function getRandomItem (arr = []) {
  if (!arr.length) {
    return ''
  }

  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
}


//console.log(getRandomItem(adjectives) + " " + getRandomItem(nouns));