let temperature = 22;
if (temperature > 30) {
    console.log("It’s hot today.");
} else if (temperature < 15){
console.log("It’s cold today.");
} else {
    console.log("The temperature is moderate.");
}

if (20 <= temperature <= 25) {
    console.log("Perfect for a walk!");
} 
if (temperature >= 20 && temperature <= 25) {
    console.log("Perfect for a walk!");
}
if (temperature < 10 || temperature > 35){
    console.log("Extreme weather alert!" );
}

let lightColor = 'green';
switch (lightColor) {
    case 'red':
        console.log('Stop!');
        break;
    case'yellow':
        console.log('Slow down');
        break;
    case 'green':
        console.log('Go!');
        break;
    default:
        console.log('Caution, unknown!');
        break;
}