// CREARE FUNZIONE CHE GENERA 16 NUMERI CASUALI DA 1 a 100
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min;
}
var randomNumber = [ ];
for (var i = 0; i <= 15; i++) {
  randomNumber.push(getRandomNumber (1, 100))
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
// FUNZIONE CONTROLLO NUMERO IN range
function isInTheRange(min, max, number) {
  var result = false;
  if(number >= min && number <= max) {
    result = true;
  }
  return result;
}
// VARIABILI NECESSARIE
var points = 0; //punteggio

// CHIEDE ALL'UTENTE 34 VOLTE DI INSERIRE UN NUMERO
// se il numero inserito nel prompt è presente in array, hai perso. Se il numero inserito non è presente in array, pushiamo il punteggio 1 in arrey punteggio. per 34 volte.
var checked = false;
for (var i = 0; i < 84 && checked == false; i++) {
  userNumber = parseInt(prompt("inserisci un numero"));
  for (var k = 0; k < randomNumber.length && checked == false; k++){
    if (userNumber == randomNumber[k]) {
      checked = true;
    }
  }
}
console.log('il tuo punteggio è', i);
console.log(checked);
