// VARIABILI NECESSARIE
var points = 0; //punteggio
var userNumbers = []; //array dove salvare i numeri dell'utente
var attempts; //variabile numero di tentativi in base alla difficoltà
var minLevel; //numeri minimi generati in base alla difficoltà
var maxLevel; //numeri massimi generati in base alla difficoltà
var level = 0; //livello di difficoltà di gioco

// IMPOSTO LA DIFFICOLTA'
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
// CHIEDE ALL'UTENTE 34 VOLTE DI INSERIRE UN NUMERO
// se il numero inserito nel prompt è presente in array, hai perso. Se il numero inserito non è presente in array, pushiamo il punteggio 1 in arrey punteggio. per 34 volte.


console.log('il tuo punteggio è', i);
console.log(checked);

// LE FUNZIONI
// CREARE FUNZIONE CHE GENERA 16 NUMERI CASUALI DA 1 a 100
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min;
}
var randomNumber = [ ];
for (var i = 0; i <= 15; i++) {
  randomNumber.push(getRandomNumber (minLevel, maxLevel))
}
// CREARE FUNZIONE CHE CERCA IL NUMERO IN ARRAY
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
function isInTheRange(min, max, number) {
  var result = false;
  if(number >= min && number <= max) {
    result = true;
  }
  return result;
}
