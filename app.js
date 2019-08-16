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

	

window.addEventListener('load', () => {
	let long;
	let lat;
	let temperatureAmot = document.querySelector(".weather-degree");
	let verdict = document.querySelector(".verdict");
	let summaryOfWeather = document.querySelector(".summaryOfWeather");

	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(position => {
			long = position.coords.longitude;
			lat = position.coords.latitude;
			const proxy = "https://cors-anywhere.herokuapp.com/"
			const api = `${proxy}https://api.darksky.net/forecast/29db519625661493b5a068b7f07abdc1/${lat},${long}`;
			
			fetch(api)
			.then(response => {
				return response.json();
			})
			.then(data => {
				console.log(data);
				const {temperature,summary} = data.currently;
				temperatureAmot.textContent = Math.floor((temperature - 32) * 5 / 9);
				verdict.textContent =data.timezone;
				summaryOfWeather.textContent= summary;

			})
		});
	}
});
greetings();