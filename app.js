function clock() {
	let fullDate = new Date();
	let hours = fullDate.getHours() % 12 || 12;
	let mins = fullDate.getMinutes();

var ampm = (fullDate.getHours() < 12) ? "AM" : "PM";
	if (hours < 10) {
		hours = "0" + hours;
	}
	if (mins < 10) {
		mins = "0" + mins;
	}
	
	document.getElementById('hour').innerHTML = hours;
	document.getElementById('min').innerHTML = ':' + mins;
	document.getElementById('ampm').innerHTML = ampm;

}
setInterval(clock, 1000)


int = document.getElementById("int");
greet = document.getElementById("greeting");
function greetings(){
	let today = new Date();
	hour = today.getHours();

	if(hour < 12){
		greet.innerHTML = "Good Morning"
	} else{
		greet.innerHTML = "Good Evening"
	}
}
greetings();
			