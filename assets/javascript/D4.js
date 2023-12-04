/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = (l1 , l2) => {
    let areaRettangolo = l1 * l2;
    return areaRettangolo
}
console.log("L'area del rettangolo e' " + area(5, 7))

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = (num1 , num2 ) => {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    } else {
        return num1 + num2;
    }
}
// numeri uguali
 console.log("Numeri uguali = " + crazySum(5 , 5))

// numri diversi
 console.log("Numeri diversi = " + crazySum(20 , 5))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = (numero) => {
   let absoluteDifference = Math.abs(numero - 19);
   if(numero > 19){
    return absoluteDifference * 3
   } else {
    return absoluteDifference;
   }
}
 console.log("Numero maggiore di 19 = " + crazyDiff(78))
 console.log("Numero minore di 19 = " + crazyDiff(8))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
const boundary = (n) => {
    if((n >= 20 && n <= 100) || (n === 400)){
    return true;
  } else {
    return false;
  }
}
console.log("Caso true = " + boundary(60))
console.log("Caso true 2 = " + boundary(400))
console.log("Caso false = " + boundary(500))


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = (str) => {
    let epic = "EPICODE" 
    if(str.startsWith("EPICODE")){
        return str;
    } else {
        return epic + str;
    }
}
console.log(epify("EPICODE e' fantastica"))
console.log(epify(" e' pippo pluto"))
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = (number) => {
 if((number % 3 === 0) || (number % 7 === 0)){
    return console.log("E' divisibile per 3 o 7");
 } else {
    return console.log("Non e' divisibile per 3 o 7")
 }
}
check3and7(1328)
check3and7(786)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = (str2) => {
    let reversed = str2.split("").reverse().join("");
    return reversed;
}

console.log(reverseString("EPICODE"))
console.log(reverseString("ANTONIO"))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = (str3) => {
    let upperWord = str3.split(" ");
    const array = [];
    for( let i = 0; i < upperWord.lenght; i++ ) {
        const word = upperWord[i]
        const firstLetter = word.charAt(0).toUpperCase()
        const lastChar = word.substring(1);

        const fullString = firstLetter + lastChar;
        array.push(fullString)
  
 }
return array.join(" ")
}

console.log(upperFirst("non ho la piu pallida idea di cosa scrivere"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = (str4) => {
    const cuttedString = str4.substring(1,1)
    return cuttedString;
}
console.log(cutString("CIAO"))
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = (nu) => {
    const random = []
   for( i = 0 ; i < nu; i++){
    const getRandom = Math.floor(Math.random() * 11)
    random.push(getRandom)
   }
   return random;
}
console.log(giveMeRandom(10))