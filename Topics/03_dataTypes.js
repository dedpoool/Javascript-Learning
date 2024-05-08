"use strict"; //treat all js code as newer version

// Your code should readable and clean 

/*
DOCUMENTATION FOR JS CAN BE READ FROM
-MDN (this is used widely but not officially by JS it is powered by mozila)
-TC39.es is the real community for the javascript documentation (OFFICIAL!)
*/


// THERE ARE 7 PRIMITIVE DATA TYPES 
let name = "Vishal"; //STRING
let score = 69; //NUMBER
let flagCheck = true; //BOOLEAN
let weather = null; //NULL (null is defined as a OBJ datatype)
let gender; //UNDEFINED (the value of a unassigned variable is undefined)
let stockmarket = 16483567852142358941n; //BIGINT (this is used to store big number values can be defined as putting 'n' in the end)
let uniqueId = Symbol('123');

// let's check the type of all the variables above
console.log('THESE ARE VALUES FOR THE PRIMITIVE DATA TYPE IN THE JS');
console.table([
    [typeof name, name],
    [typeof score, score],
    [typeof flagCheck, flagCheck],
    [typeof weather, weather],
    [typeof gender, gender],
    [typeof stockmarket, stockmarket],
    [typeof uniqueId, uniqueId]
]);

// THERE ARE 3 REFERENCE DATA TYPE (non primitive)
let marksArray = [69, 64, 68];  // ARRAY (an array is a type of obj it's a unique type of obj as we use numbers to excess it's data (school[2]) but in objects we use names to access the data (school.name))
let studentsObj = {  // OBJ
    name: 'Vishal',
    rollno: 84615,
    rank: 'B',
    active: true,
}
let schoolFunction = function(){ //FUNCTION
    console.log("The school function is running!");
    return 'This is the school function returns';
}


// Let's check the types of all non primitive data types above
console.log('THESE ARE THE VALUES FOR ALL THE NON PRIMITIVE DATA TYPES IN JS');
console.table([
    [typeof marksArray, marksArray],
    [typeof studentsObj, studentsObj.name],
    [typeof schoolFunction, schoolFunction()] 
])

/*
NOTE! 📝
-All the non primitive data types are objects
- In the above example the function type is function but if you study about it you will find that it can also be called as 'obj function'
*/
