addListener('.inputSearchForm', 'submit', function(event){
  event.preventDefault();
  var url = 'http://api.apixu.com/v1/current.json?key=e4bf9ee029124be085f120321171807&q='+ event.target[0].value;
  console.log(url);
  fetch(url, function (response) {
    console.log(response);
    
  });
});

// response.current.hummidity // hummidity
// response.current.temp_c // celcius temp
// response.current.temp_f // fh temp
// response.current.condition.icon // temp icon
