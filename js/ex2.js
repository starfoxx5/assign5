const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//use filter to get odd numbers
const oddnum = numbers.filter (number => number%2);
//use filter to get numbers divisible by 2 or 5
const num25 = numbers => numbers.filter( number % 2 == 0 || number % 5 == 0);
//use filter to get numbers divisible by 3 squared

//use reduce to get the sum of numbers divisible by 5 squared




console.log(oddnum)
console.log(num25(numbers))