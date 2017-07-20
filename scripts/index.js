var profileGifContainer = document.querySelector('.profileGifContainer');
var noiseContainInner = document.querySelector('.noiseContainInner');
var isFamousLeft = document.querySelector('.isFamousLeft');
var isFamousRight = document.querySelector('.isFamousRight');



addListener('.inputSearchForm', 'submit', function(event){
  event.preventDefault();
	var initialSearch = event.target[0].value;
	var updatedSearch = initialSearch.replace(' ', '%20');

	var url2017 = 'http://content.guardianapis.com/search?from-date=2017-01-01&to-date=2017-12-31&q=' + updatedSearch + '&api-key=1b0f1dd2-eba1-46b2-b432-ba942efb90e5'

	var urlGiphy = 'http://api.giphy.com/v1/gifs/search?q=' + event.target[0].value + '&api_key=eb3ec09a06d34a58a7e16f62990f1c93&limit=12';

	fetch(url2017,function(response) {
		var result2017 = response.response.total;
    if (result2017 < 100){
      isFamousLeft.innerHTML = `W<br>H<br>O<br><br> A<br>R<br>E<br><br> Y<br>O<br>U<br><br>?<br>?`;
      isFamousRight.innerHTML = `W<br>H<br>O<br><br> A<br>R<br>E<br><br> Y<br>O<br>U<br><br>?<br>?`;

      noiseContainInner.style.backgroundImage = `url('https://media4.giphy.com/media/uHEqSttWHv476/giphy.gif')`

    } else if (result2017 < 500) {
      isFamousLeft.innerHTML = `Y<br>O<br>U<br>R<br><br>A<br>L<br>M<br>O<br>S<br>T<br><br>T<br>H<br>E<br>R<br>E<br>`;
      isFamousRight.innerHTML = `Y<br>O<br>U<br>R<br><br>A<br>L<br>M<br>O<br>S<br>T<br><br>T<br>H<br>E<br>R<br>E<br>`;

    } else {

      isFamousLeft.innerHTML = `Y<br>O<br>U<br>R<br><br>F<br>A<br>M<br>O<br>U<br>S<br>`;
      isFamousRight.innerHTML = `Y<br>O<br>U<br>R<br><br>F<br>A<br>M<br>O<br>U<br>S<br>`;
    }

});
 
fetch(urlGiphy, function(response) {
		var gifImage = response.data[0].images.downsized_medium.url;
		noiseContainInner.style.backgroundImage = `url('${gifImage}')`
});

event.target.reset();
});
