var censoredWords = ["sad", "bad", "mad"];

var censor = function(str) {
	for(i in censoredWords){
		str.replace(censoredWords[i], "***");
	}
	
	return str;
}

var addCensoredWord = function(word) {
	censoredWords.push(word);
}

var getCensoredWords = function() {
	return censoredWords;
}

export.censor = censor;
export.addCensoredWord = addCensoredWord;
export.getCensoredWords = getCensoredWords;