function createGameGrid() {
  var img = null;
  for(var number = 0; number < 8; number++) {
    img = document.createElement('img');
    img.className = 'card';
    img.id = number;
    img.src = 'graphics/guitarists/top.jpg';
    img.setAttribute('onclick', 'turnOver(event)');
    document.body.appendChild(img);
  }
}

var clicks = 0;
function turnOver(event) {
  clicks++;
  //console.log('clicks: '+ clicks);
  if(clicks > 2) {
    return false;
  }
  //console.log('event source'+ event.target || event.srcElement);
  var eventSourceImg = event.target || event.srcElement;
  if(eventSourceImg.id === '1') {
    eventSourceImg.src = "graphics/guitarists/003-bb.king.jpg";
  }

  var stres = setTimeout(function() {
    eventSourceImg.src="graphics/guitarists/top.jpg";
    clicks = 0;}, 3000);
  //console.log('settimeout result: '+ stres);
  
}
