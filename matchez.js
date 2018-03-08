var clicks = 0;

function turnOver(event) {
  clicks++;
  //console.log('clicks: '+ clicks);
  if(clicks > 2) {
    return false;
  }
  //console.log(event.target || event.srcElement);
  var eventSourceImg = event.target || event.srcElement;
  if(eventSourceImg.id === '1') {
    eventSourceImg.src = "graphics/guitarists/0001-jimi.hendrix.jpg";
  } else if (eventSourceImg.id === '2') {
    eventSourceImg.src = "graphics/guitarists/0002-duane.allman.jpg";
  } else if (eventSourceImg.id === '3') {
    eventSourceImg.src = "graphics/guitarists/003-bb.king.jpg";
  }
  var stres = setTimeout(function() {
    eventSourceImg.src="graphics/guitarists/top.jpg";
    clicks = 0;}, 3000);
  //console.log('settimeout result: '+ stres);
}

