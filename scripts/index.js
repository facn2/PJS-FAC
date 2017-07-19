var publicFigure2012 = document.querySelector('.publicFigure2012');
var publicFigure2013 = document.querySelector('.publicFigure2013');
var publicFigure2014 = document.querySelector('.publicFigure2014');
var publicFigure2015 = document.querySelector('.publicFigure2015');
var publicFigure2016 = document.querySelector('.publicFigure2016');
var publicFigure2017 = document.querySelector('.publicFigure2017');

addListener('.inputSearchForm', 'submit', function(event){
  event.preventDefault();
	var initialSearch = event.target[0].value;
	console.log(initialSearch);
	var updatedSearch = initialSearch.replace(' ', '%20');
	console.log(updatedSearch);

	var url = 'http://content.guardianapis.com/search?from-date=2012-01-01&to-date=2012-12-31&q=' + updatedSearch + '&api-key=1b0f1dd2-eba1-46b2-b432-ba942efb90e5'

	var url2013 = 'http://content.guardianapis.com/search?from-date=2013-01-01&to-date=2013-12-31&q=' + updatedSearch + '&api-key=1b0f1dd2-eba1-46b2-b432-ba942efb90e5'

	var url2014 = 'http://content.guardianapis.com/search?from-date=2014-01-01&to-date=2014-12-31&q=' + updatedSearch + '&api-key=1b0f1dd2-eba1-46b2-b432-ba942efb90e5'

	var url2015 = 'http://content.guardianapis.com/search?from-date=2015-01-01&to-date=2015-12-31&q=' + updatedSearch + '&api-key=1b0f1dd2-eba1-46b2-b432-ba942efb90e5'

	var url2016 = 'http://content.guardianapis.com/search?from-date=2016-01-01&to-date=2016-12-31&q=' + updatedSearch + '&api-key=1b0f1dd2-eba1-46b2-b432-ba942efb90e5'

	var url2017 = 'http://content.guardianapis.com/search?from-date=2017-01-01&to-date=2017-12-31&q=' + updatedSearch + '&api-key=1b0f1dd2-eba1-46b2-b432-ba942efb90e5'

fetch(url, function (response) {
	console.log(response.response.total);
});

	fetch(url2013, function (response) {
		console.log(response.response.total);
});

	fetch(url2014,function(response) {
		console.log(response.response.total);
});

fetch(url2015, function (response) {
	console.log(response.response.total);
});

	fetch(url2016, function (response) {
		console.log(response.response.total);
});

	fetch(url2017,function(response) {
		console.log(response.response.total);
});

});






