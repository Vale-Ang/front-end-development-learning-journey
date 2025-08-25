const showMessage = () => console.log("JavaScript è divertente!");
showMessage();
const calculateDiscount = (price, discount = 10) => price-(price*discount/100);
const printFinalPrice = finalPrice => console.log(`Il prezzo finale è: ${finalPrice}`);
printFinalPrice(calculateDiscount(100));