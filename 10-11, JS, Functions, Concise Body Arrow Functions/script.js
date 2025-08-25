const calculateRectangleArea = (width, height) => width * height;
const rectangleAreaResult = calculateRectangleArea(4, 6);
console.log(rectangleAreaResult);
const multiplyByNineFifths = number => number * (9/5);
const getFahrenheit = celsius => multiplyByNineFifths(celsius) + 32;
const fahrenheitResult =getFahrenheit(25);
console.log(fahrenheitResult);