var comments = [
	{"name":"Vito Corleone","comment": "I'm gonna make him an offer he can't refuse.","timestamp":69379200000},
	{"name":"Terry Benedict","comment":"Congratulations... You're a dead man!","timestamp":1007683200000},
	{"name":"Jessica Rabbit","comment":"I'm not bad. I'm just drawn that way.","timestamp":583113600000},
	{"name":"Martin Brody","comment":"You're gonna need a bigger boat.","timestamp":172281600000},
	{"name":"Jack Dawson","comment":"I'm the king of the world!","timestamp":882489600000},
	{"name":"The Terminator","comment":"Hasta la vista, baby.","timestamp":678326400000},
	{"name":"The Joker","comment":"Why so serious..?","timestamp": 1215993600000}
];
	
	var output ="";
	comments.sort(function(a, b){
		return new Date(b.timestamp) - new Date(a.timestamp);
	});

	console.log(comments);
	
	var date, year, month, timestamp, d;
	for(var i in comments){
		if(i < 5){
			timestamp = comments[i].timestamp;
			d = new Date(timestamp);
			date = d.getDate();
			year = d.getFullYear();
			month = d.getMonth();
			output +="<tr><td><p class=\"italic text-muted\">\""	+ comments[i].comment + "\"</p><span class=\"bold\">- " + comments[i].name + ",</span> " + month + "/" + date + "/"+ year + "</td></tr>"; 			 
			}
	}
	
		document.getElementById("TFtable").innerHTML = output;
	
	