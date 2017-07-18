var cityTemp = document.querySelector('.cityTemp');
var imageIcon = document.querySelector('.imageIcon');
console.log(imageIcon);

addListener('.inputSearchForm', 'submit', function(event){
  event.preventDefault();
  var url = 'http://api.apixu.com/v1/current.json?key=e4bf9ee029124be085f120321171807&q='+ event.target[0].value;

  fetch(url, function (response) {
	  var sunIcon = response.current.condition.icon;
	  var tempC = response.current.temp_c;

	  cityTemp.innerHTML = tempC;
		imageIcon.src = sunIcon;
  });
});