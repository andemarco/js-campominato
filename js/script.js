// GENERARE 16 NUMERI CASUALI DA 1 a 100

function getRandomNumber() {
  min = Math.ceil(1);
  max = Math.floor(100)
  return Math.floor(Math.random() * (100 - 1)) + 1;
}
var randomNumber = [ ];

for (var i = 0; i <= 15; i++) {
  randomNumber.push(getRandomNumber (1, 100))
}
console.log(randomNumber);

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
