//Data types can be converted into different types using the methods like number sting boolen etc

// STRING CONVERSION
let score = 33 
let scoreInString = String(score); //This will convert the score from number to string 

console.log(`This is the score after the conversion form number to string: ${scoreInString} and this is the type: ${typeof(scoreInString)}`);

// NUMBER CONVERSION
score = '  33   ';  //setting the value of the score variable to string 
let scoreToNumber = Number(score);
// Note that the string will be converted to the number even if we put spaced in the begging or end also with one '.' but:-
//  - It should not contain more than one '.' to act like a real no.
//  - It should not contain any type of character in it
console.log(`This the value of score after converted to number form string: ${scoreToNumber} and this is the data type: ${typeof(scoreToNumber)}`);
