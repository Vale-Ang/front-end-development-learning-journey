const temperature = 22;
const isRaining = false;
if (temperature >= 20 && !isRaining) {
    console.log("Perfect day for a walk.");
} else {
    console.log("Maybe stay inside.");
}
if(temperature >= 30 || isRaining) {
    console.log("Avoid going out now.");
} else {
    console.log("The weather is manageable.");
}
const isAvailable = false;
if(!isAvailable) {
    console.log("The item is currently unavailable.");
} else {
    console.log("Item in stock.");
}
const isWeekend = true;
if(!isWeekend) {
    console.log("It's a weekday.");
} else {
    console.log("Weekend mode activated.");
}