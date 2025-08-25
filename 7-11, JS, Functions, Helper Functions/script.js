function calculateSquare(number) {
    return number * number;
}
function sumOfSquares(a, b) {
    return calculateSquare(a) + calculateSquare(b);
}
console.log(sumOfSquares(3, 4));
function addTax(prezzo) {
    return prezzo * 1.1;
}
function applyDiscount(prezzo) {
    return prezzo * 0.8;
}
function getFinalPrice(initialPrice) {
    return applyDiscount(addTax(initialPrice));
}
console.log(getFinalPrice(100));