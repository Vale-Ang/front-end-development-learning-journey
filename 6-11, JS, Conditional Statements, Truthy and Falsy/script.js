const userMessage = /*'Hello!'*/'';
if (userMessage) {
    console.log("User has sent a message.");
} else {
    console.log("No message received.");
}
const valueZero = 0;
const emptyString = '';
const valueNull = null;
const valueUndefined = undefined;
const valueNaN = NaN;
if (valueZero) {
    console.log("Truthy.");
} else {
    console.log("Falsy.");
}
if (emptyString) {
    console.log("Truthy.");
} else {
    console.log("Falsy.");
}
if (valueNull) {
    console.log("Truthy.");
} else {
    console.log("Falsy.");
}
if (valueUndefined) {
    console.log("Truthy.");
} else {
    console.log("Falsy.");
}
if (valueNaN) {
    console.log("Truthy.");
} else {
    console.log("Falsy.");
}