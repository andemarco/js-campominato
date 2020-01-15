// VARIABILI NECESSARIE
var points = 0; //punteggio
var userNumbers = []; //array dove salvare i numeri dell'utente
var tabooNumbers = []; //array dove salvare i numeri vitati
var attempts; //variabile numero di tentativi in base alla difficoltà
var minLevel; //numeri minimi generati in base alla difficoltà
var maxLevel; //numeri massimi generati in base alla difficoltà

// DIFFICOLTA'
//se l'utente inserisce in difficoltà un valore non previsto, deve reinserire
while (isInTheRange(0, 2, level) == false){
  var level = parseInt(prompt('Indica un livello di difficoltà del tuo gioco da 0 a 2'))
}
console.log('difficolta' + level);
// Con difficoltà 0 => numeri vietati da 1 a 100, tentativi 84
// con difficoltà 1 => numeri vietati  da 1 a 80, tentativi 64
// con difficoltà 2 => numeri vietati  da 1 a 50, tentativi 34
if (level == 0) {
  attempts = 84;
  minLevel = 1;
  maxLevel = 100;
} else if (level == 1) {
  attempts = 64;
  minLevel = 1;
  maxLevel = 80;
} else if (level == 2) {
  attempts = 34;
  minLevel = 1;
  maxLevel = 50;
}
console.log('tantativi' + attempts);
console.log('numero minimo' + minLevel);
console.log('numero massimo' + maxLevel);

// IL GIOCO
//Genero 16 numeri random da inserire in array e verifico che non ci siano doppioni. Se è già presente nell'array, lo pusho.
for (var i = 0; tabooNumbers.length <= 15; i++) {
  var randomNumber = getRandomNumber(minLevel, maxLevel)
  var duplicate = isInArray(tabooNumbers, randomNumber)
  if (duplicate == false) {
    tabooNumbers.push(randomNumber)
  }
}

console.log('i numeri vietati sono' + tabooNumbers.sort());

//Chiedo all'utente di inserire TOT numeri. Se il numero è presente tra i tabooNumbers, l'utente ha perso. Se il numero non è presente, l'utente accumula un +1 di punteggio. Esauriti i tentativi, il gioco si ferma.
var tabooFound = false;
for (var i = 0; i < attempts && tabooFound == false; i++) {
  var promptNumber = false
  while (isInTheRange(minLevel, maxLevel, promptNumber) == false) {
    promptNumber = parseInt(prompt('inserisci un numero da 1 a 100'));
  } if (isInArray(userNumbers, promptNumber) == false) {
      userNumbers.push(promptNumber)
      if (isInArray(tabooNumbers, promptNumber) == true){
        console.log('hai perso!Il tuo punteggio è', points);
        tabooFound = true;
      } else {
        points++
      }
  }
}
console.log('i numeri inseriti sono', userNumbers);

if (userNumbers == attempts) {
  console.log('Hai vinto!Hai raggiunto il punteggio massimo.Il tuo punteggio è:', points);
}
// LE FUNZIONI
// funzione che genera numeri casuali
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min;
}

// CREARE FUNZIONE CHE CERCA IL NUMERO IN ARRAY
//valore true se è presente in ARRAY
//valore false se non è presente
function isInArray(array, element) {
  var i = 0;
  var result = false;
  while (i < array.length && result == false) {
    if (array[i] == element) {
      result = true;
    }
    i++;
  }
  return result;
}

// FUNZIONE CONTROLLO NUMERO IN RANGE
//valore true se è in range
//valore false se non è in range
function isInTheRange(min, max, number) {
  var result = false;
  if(number >= min && number <= max) {
    result = true;
  }
  return result;
}
