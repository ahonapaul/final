let myRec = new p5.SpeechRec();
let aiVoice = new p5.Speech();

// fetch('https://api.wordassociations.net/3cbea5e8-10f7-4eca-af32-c0066ac212b6')
// 	.then(response =>{
// 		return response.json();
// 	})

let data = { 
	"sea": 
[
	{
		"quote" : "Let me pull myself out of these waters",
		"author" : "Virginia Woolf",
		"title" : "The Waves",
		"syllables" : 10
	},
	{
		"quote" : "And what are you now? Water?",
		"author" : "Ocean Vuong",
		"title" : "On Earth We're Briefly Gorgeous",
		"syllables" : 7
	},
	{
		"quote" : "How foolish to believe we are more powerful than the sea or the sky",
		"author" : "Ruta Sepetys",
		"title" : "Salt To The Sea",
		"syllables" : 17
	}
],

	"death":
[
	{
		"quote" : "After awhile you could get used to anything.",
		"author" : "Albert Camus",
		"title" : "The Stranger",
		"syllables" : 12
	},
	{
		"quote" : "There began the most terrible nightmare a person could endure",
		"author" : "Amparo Davila",
		"title" : "The Houseguest",
		"syllables" : 16
	}
],
	"social":

	{
		"quote" : "People are always ruining things.",
		"author" : "J.D. Salinger",
		"title" : "The Catcher In The Rye",
		"syllables" : 9
	}
};

function setup(){
	myRec.onResult = showResult;
	myRec.start();
}

function showResult(){

	document.getElementById("question").innerHTML = "in one word, what is your biggest fear?";

	if(myRec.resultValue==true) {
		let response = myRec.resultString;
		console.log(response);
		document.getElementById("response").innerHTML = response;
		if(response == "sea" || response == "ocean" || response == "water") {
			let random1 = Math.floor(Math.random() * 3);
			console.log(random1);
			//setPitch(2/(point.sea[random].syllables));
			aiVoice.speak(data.sea[random1].quote);
			document.getElementById("title").innerHTML = "this quote is from " + data.sea[random1].title + " by " + data.sea[random1].author;
		}
		if(response == "death" || response == "dead" || response == "afterlife"){
			let random2 = Math.floor(Math.random() * 2);
			aiVoice.speak(data.death[random2].quote);
			document.getElementById("title").innerHTML = "this quote is from " + data.death[random2].title + " by " + data.death[random2].author;
		}
		if(response == "people" || response == "social" || response == "socializing"){
			aiVoice.speak(data.social.quote);
			document.getElementById("title").innerHTML = "this quote is from " + data.social.title + " by " + data.social.author;
		}
		}
}

function resetConvo(){
	location.reload();
	myRec.start();
}

function openPage(){
	window.location.assign("index.html");
}