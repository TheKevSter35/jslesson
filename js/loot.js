//bronnen
//https://codepen.io/gearmobile/pen/mEJwYw
// Oefening 1 dobbelsteen

var tekstArray; // opslaan van meedere waardes kaartnamen
tekstArray = [
  'Blue Eyes White Dragon',
  'Red eyes B. Dragon',
  'Dark Magician',
  'D/D/D Oblivion King Abyss Ragnarok',
  'Firewall Dragon',
  'Stardust Dragon',
];

var imgArray; // opslaan van meedere waardes kaart afbeeldingen
imgArray = [
  'images/blueeyes.png',
  'images/redeyes.png',
  'images/darkmag.png',
  'images/ddd.png',
  'images/firewall.png',
  'images/stardust.png',
];

var openPack = document.getElementById('pack'); // haalt HTML element van id pack

function BoosterOpen() {
  var kaart = Math.floor((Math.random() * 6) + 1);
  var kaartnaam = tekstArray[kaart - 1]; // var is gelijk aan imgArray - 1
  if (kaart <= 5) { //als kaart lager of gelijk aan 5 is voer dit uit
    document.getElementById('kaartinfo').innerHTML = "U heeft een  " + kaartnaam + " " + "gekregen";
  } else { // anders voer dit uit
    document.getElementById('kaartinfo').innerHTML = "U heeft een Epic " + kaartnaam + " " + "gekregen";
  }
  
  var imgKaart = imgArray[kaart - 1]; // var is gelijk aan imgArray - 1
  document.getElementById('kaartimg').src = imgKaart; // haalt HTML element van id pack
}
openPack.addEventListener('click', BoosterOpen); //Voer uit wanner er op wordt geklikt

// Credits Lars Breuren
var ShowCards = document.getElementById('Allecards'); // haalt HTML element van id Allecards

function Allecards() {
  var ToonCardsArray = tekstArray; //Array gekoppeld aan tekstArray kaart namen
  var cardText = ""; //leeg tekst vakje
  var i;
  for (i = 0; i < ToonCardsArray.length; i++) { //Voor elk element in de array voer dit uit:
    cardText += ToonCardsArray[i] + "<br>"; // Voeg Array toe aan de tekst variable
  }
  document.getElementById("ToonCards").innerHTML = cardText; //Plaats de geloopde tekst op de pagina in de p id ToonCards
}
ShowCards.addEventListener('click', Allecards); //Voer uit wanner er op wordt geklikt
//
