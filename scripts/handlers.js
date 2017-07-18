 // Pre-Written Functions

function addListener(selector, eventName, callback) {
  document.querySelector(selector).addEventListener(eventName, callback)
}

function fetch(url, callback){
  var xhr = new XMLHttpRequest();

  xhr.addEventListener('load', function() {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      return callback(response);
    }
  });

  xhr.open('GET', url);
  xhr.send();
}
