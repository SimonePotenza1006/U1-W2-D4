/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function(l1, l2) {
    let result = l1*l2
    console.log(result)
}

area(4, 5)
area(3, 7)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function(n1, n2) {
    let result 
    if (n1 === n2) {
        result = (n1+n2)*3
    }
    else {
        result = n1 + n2
    }
    console.log(result)
}

crazySum (3, 3)

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function(n1) {
    let result
    if (n1 > 19){
        result = (n1-19)*3
    }
    else {
        result = n1 - 19
    }
    console.log(Math.abs(result))
}

crazyDiff(18)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n1) {
    let result
    if (20 <= n1  && n1 <= 100){
        result = true
    }
    else if (n1 === 400) {
        result = true
    }
    else {
        result = false
    }
    console.log(result)
}

boundary(400)
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function (initialString){
    let result = ""
    if(initialString.slice(0,7) !== "EPICODE"){
        result= "EPICODE" + " " + initialString
    }
    else {
        result = initialString
    }    
    console.log(result)
}

epify ("EPICODE, Ciao a tutti!")

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (n){
    let result
    if (n < 0){
        result = console.log("Il numero inserito non è positivo")
    } 
    else if(n % 3 === 0 || n % 7 === 0){
        result = console.log("Il numero è un multiplo di 3 o di 7")
    }
    else console.log("Il numero non è multiplo di 3 o 7")
    return result
}

check3and7(5)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function(str) {
    let splitString = str.split("")
    let revArray = splitString.reverse()
    return console.log(revArray.join(""))
  }

reverseString("Madonna")




/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (myString){
    let words = myString.split("")
    for (let i = 0; i < words.length; i++){
        words[i] = words[i].toLowerCase()
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1, words[i].length)
    }
    return console.log(words.join(""))
}

upperFirst("ciao mamma come mi diverto")

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n){
    let arr=[]
    for(let i =0; i < n; i++){
        arr.push(Math.random()*10)
    }
    return arr
}

console.log(giveMeRandom(4))
