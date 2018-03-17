var guitarists = ['0001-jimi.hendrix.jpg', '0002-duane.allman.jpg', '0007-stevie.ray.vaughan.jpg',
  '0008-ry.cooder.jpg', '0009-jimmy.page.jpg', '0010-keith.richards.jpg', '0011-kirk.hammett.jpg',
  '0012-kurt.cobain.jpg', '0013-jerry.garcia.jpg', '0014-jeff.beck.jpg', '0015-carlos.santana.jpg',
  '0016-johnny.ramone.jpg', '0017-jack.white.jpg', '0018-john.frusciante.jpg', '0019-richard.thompson.jpg',
  '0020-james.burton.jpg', '0021-george.harrison.jpg', '0022-mike.bloomfield.jpg', '0023-warren.haynes.jpg',
  '0024-the.edge.jpg', '0025-freddy.king.jpg', '0026-tom.morello.jpg', '0027-mark.knopfler.jpg',
  '0028-stephen.stills.jpg', '0029-ron.asheton.jpg', '0031-dick.dale.jpg', '0032-john.cipollina.jpg',
  '0033-lee.ranaldo.jpg', '0034-thurston.moore.jpg', '0035-john.fahey.jpg', '0036-steve.cropper.jpg',
  '0037-bo.diddley.jpg', '0038-peter.green.jpg', '0039-brian.may.jpg', '003-bb.king.jpg',
  '0040-john.fogerty.jpg', '0041-clarence.white.jpg', '0042-robert.fripp.jpg', '0043-eddie.hazel.jpg',
  '0044-scotty.moore.jpg', '0045-frank.zappa.jpg', '0046-les.paul.jpg', '0047-t.bone.walker.jpg',
  '0048-joe.perry.jpg', '0049-john.mclaughlin.jpg', '004-eric.clapton.jpg', '0050-pete.townshend.jpg',
  '0051-paul.kossoff.jpg', '0052-lou.reed.jpg', '0053-mickey.baker.jpg', '0054-jorma.kaukonen.jpg',
  '0055-ritchie.blackmore.jpg', '0056-tom.verlaine.jpg', '0057-roy.buchanan.jpg', '0058-dickey.betts.jpg',
  '0059-ed.obrien.jpg', '005-robert.johnson.jpg', '0060-jonny.greenwood.jpg', '0061-ike.turner.jpg',
  '0062-zoot.horn.rollo.jpg', '0063-danny.gatton.jpg', '0064-mick.ronson.jpg', '0065-hubert.sumlin.jpg',
  '0066-vernon.reid.jpg', '0067-link.wray.jpg', '0068-jerry.miller.jpg', '0069-steve.howe.jpg',
  '006-chuck.berry.jpg', '0070-eddie.van.halen.jpg', '0071-lightnin.hopkins.jpg', '0072-joni.mitchell.jpg',
  '0073-trey.anastasio.jpg', '0074-johnny.winter.jpg', '0075-adam.jones.jpg', '0076-ali.farka.toure.jpg',
  '0077-henry.vestine.jpg', '0078-robbie.robertson.jpg', '0079-cliff.gallup.jpg', '0080-robert.quine.jpg',
  '0081-derek.trucks.jpg', '0082-david.gilmour.jpg', '0083-neil.young.jpg', '0084-eddie.cochran.jpg',
  '0085-randy.rhoads.jpg', '0086-tommy.iommi.jpg', '0087-joan.jett.jpg', '0088-dave.davies.jpg',
  '0089-d.boon.jpg', '0090-glen.buxton.jpg', '0091-robby.krieger.jpg', '0092-wayne.kramer.jpg',
  '0093-fred.sonic.smith.jpg', '0094-bert.jansch.jpg', '0095-kevin.shields-MyBloodyValentine.jpg',
  '0096-angus.young-AcDc.jpg', '0097-robert.randolph-Randolphs.jpg', '0098-leigh.stephens-BlueCheer.jpg',
  '0099-greg.ginn-BlackFlag.jpg', '0100-kim.thayil-SoundGarden.jpg', 'top.jpg'];

//console.log(guitarists[99]);
var gridSideSize = 4;
var cards = [];
for(var index = 0; index < gridSideSize * 2; index++) {
  cards[index] = guitarists[Math.floor(Math.random() * guitarists.length - 1)];
}
cards = [...cards, ...cards];
//console.log('ordered cards: '+ cards +', length: '+ cards.length); 

function shuffle(array) { // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
cards = shuffle(cards);
//console.log('shuffled cards: '+ cards);

var img = [];
function createGameGrid() {
  for(var number = 0; number < cards.length; number++) {
    img[number] = document.createElement('img');
    img[number].className = 'card';
    img[number].id = number;
    img[number].src = 'graphics/guitarists/'+ guitarists[99];
    img[number].alt = 'graphics/guitarists/'+ cards[number]; // hack, part 1
    img[number].setAttribute('onclick', 'turnOver(event)');
    var gridWrapper = document.getElementById('grid');
    gridWrapper.appendChild(img[number]);
  }
}

var clicks = [];
var results = [];
var player1 = {
  name: 'Player One',
  score: 0
};
var player2 = {
  name: 'Player Two',
  score: 0
};
var turn = 0;
function turnOver(event) {
  clicks.push('click');
  console.log('clicks length: '+ clicks.length +', type: '+ typeof clicks);
  if((clicks.length > 1) && (clicks.length % 2 === 1)) { // because well, javascript
    alert("It's next player's turn!");
    clicks = [];
    return false;
  }

  //console.log('event source'+ event.target || event.srcElement);
  var eventSourceImg = event.target || event.srcElement;
  eventSourceImg.src = eventSourceImg.alt; // hack, part 2
  results.unshift(eventSourceImg.src);
  if(results[0] === results[1]) {
    console.log('=== !!! MATCH !!! ===');
  }
  //console.log('results array to compare: '+ results.length);

  var stres = setTimeout(function() {
    eventSourceImg.src = 'graphics/guitarists/'+ guitarists[99];
  }, 3000);
}

