const risultato = multiply(4, 3);
function multiply( a, b) {
    return (a*b);
}
console.log(risultato);

// 1. Definisco la funzione freccia 'greet' con parametro predefinito
const greet = (name = 'amico') => {
    return `Ciao, ${name}`;
};

// 3. Chiamo la funzione senza argomenti
console.log(greet());
// Risultato atteso: Ciao, amico

// 4. Chiamo la funzione con l'argomento 'Luca'
console.log(greet('Luca'));
// Risultato atteso: Ciao, Luca
