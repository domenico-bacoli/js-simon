/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

Bonus:
Gestire l'inserimento dei numeri tramite 5 input diversi.
*/

// - crea una funzione che genera 5 numeri casuali e li visualizza in pagina.
// - richiamare la funzione
// - creare una variabile che faccia da contatore
// - inserire un timer di 10 secondi tipo countdown
//   SE la variabile contatore è uguale a 0 
//        ° rimuovi i numeri inseriti precedentemente in pagina
// - far partire i prompt che chiedono all'utente di inserire i numeri che erano visualizzati in precendenza, memorizzarli in una variabile.
// - visualizzare in pagina quanti e quali numeri ha indovinato l'utente.

const randomNumberEl = document.getElementById("random-number");
const timerCounterEl = document.getElementById("timer-counter");
const timeFinishedMessageEl = document.getElementById("time-finished-message");
const userNumbersEnteredEl = document.getElementById("user-numbers-entered");
const guessedNumbersEl1 = document.getElementById("guessed-numbers-1");
const guessedNumbersEl2 = document.getElementById("guessed-numbers-2");
const guessedNumbersEl3 = document.getElementById("guessed-numbers-3");
const guessedNumbersEl4 = document.getElementById("guessed-numbers-4");
const guessedNumbersEl5 = document.getElementById("guessed-numbers-5");
const numberGuessedMessageEl = document.getElementById("number-guessed-message");

let randomNumberGenerated = [];
let timerCounter = 0
let isGuessed = 0

setTimeout(enterNumber, 12000)

let countdown = setInterval(timer, 1000);
    generateRandomNumber(5);
    
    randomNumberEl.innerText = randomNumberGenerated;


//___________FUNZIONI____________
function enterNumber(){
    let userNumber1 = parseInt(prompt("inserisci il primo numero"));
    let userNumber2 = parseInt(prompt("inserisci il secondo numero"));
    let userNumber3 = parseInt(prompt("inserisci il terzo numero"));
    let userNumber4 = parseInt(prompt("inserisci il quarto numero"));
    let userNumber5 = parseInt(prompt("inserisci il quinto numero"));

    randomNumberEl.innerText = randomNumberGenerated;
    
    userNumbersEnteredEl.innerText = `Hai inserito i seguenti numeri: ${userNumber1}, ${userNumber2}, ${userNumber3}, ${userNumber4}, ${userNumber5}`;

    numberControl(userNumber1, guessedNumbersEl1);
    numberControl(userNumber2, guessedNumbersEl2);
    numberControl(userNumber3, guessedNumbersEl3);
    numberControl(userNumber4, guessedNumbersEl4);
    numberControl(userNumber5, guessedNumbersEl5);

    numberGuessedMessageEl.innerText = `Il tuo Punteggio: ${isGuessed}`
}

//funzione che restituisce un valore se il numero inserito è incluso nell'array o un altro valore se il numero inserito non è incluso nell'array
function numberControl(number, displayEl){
    if(randomNumberGenerated.includes(number)){
        displayEl.innerText = `Bravo!! hai indovinato: ${number}`;
        isGuessed++

    } else{

        displayEl.innerText = `mi dispiace ${number} non è presente nella lista`;
    }
}

function timer(){
    // console.log("ciao");
    timerCounterEl.innerText = timerCounter;
    

    if(timerCounter >= 10){
        timeFinishedMessageEl.innerText = "Tempo scaduto ora inserisci i numeri che ti ricordi";
        clearInterval(countdown);
        randomNumberEl.innerText = "";
        timerCounterEl.innerText = "";
    }
    
    timerCounter++
    
}

//Questa funzione genera e restituisce un array di 5 numeri casuali tutti diversi
function generateRandomNumber(quantity){

    while(randomNumberGenerated.length < quantity){

        let randomNumber = randomNumberBetween(1, 50)
        if(!randomNumberGenerated.includes(randomNumber)){
            randomNumberGenerated.push(randomNumber);
        }
    } return randomNumberGenerated;
}

// Numeri random
function randomNumberBetween(min, max) {
    // generiamo un numero random
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    // una volta che eseguimamo la funzione, restituisci al suo posto questo valore
    return random;
  }

//________FINE FUNZIONI__________