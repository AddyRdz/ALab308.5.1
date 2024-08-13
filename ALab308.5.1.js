
//Take an array of numbers and return the sum.
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
let array = [2, 4, 6, 8];
let total = sumArray(array);
console.log(total); //20
console.log(`The total sum of the array is ${sumArray(array)}.`);


//Take an array of numbers and return the average.
function averageArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
let avgArray = [1, 2, 3, 4];
console.log(averageArray(avgArray)); //2.5
console.log(`The average of the array is ${averageArray(avgArray)}.`);


//Take an array of strings and return the longest string.
function longestString(arrayStrings) {
  let longest = "";
  for (let i = 0; i < arrayStrings.length; i++) {
    if (arrayStrings[i].length > longest.length) {
      longest = arrayStrings[i];
    }
  }
  return longest;
}
let arrayStrings = ["house", "Run", "Serious", "Expensive"];
console.log(longestString(arrayStrings)); // Expensive
console.log(`The longest string is ${longestString(arrayStrings)}.`);

// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThan(words,number){ // two perimeters taking in
    let string = []
    for(let i = 0; i < words.length; i++){
        if(words[i].length > number) {
            string.push(words[i])
        }
    }
    return string;
}
let words = ['say', 'hello', 'in', 'the', 'morning']
console.log(stringsLongerThan(words,3));
console.log(`If I input the number 3, the strings that will come back are: ${stringsLongerThan(words,3)}.`);

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.
// n - 1 ??
function recursion(n, number){
    if(number  )
}
return 