// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire per 84 volte un numero da 1 a 100, se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato”, ovvero presente nella lista di numeri random, o raggiunge il numero massimo possibile di tentativi consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

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

var userNumber = parseInt(prompt('Inserisci un numero'))
