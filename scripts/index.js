var cityTemp = document.querySelector('.cityTemp');
var imageIcon = document.querySelector('.imageIcon');

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

 https://newsapi.org/v1/articles?source=techcrunch&apiKey=a5c68819c9574874bda2eb6683023e8f
a5c68819c9574874bda2eb6683023e8f

