//In this code I will tell about the types of the variables and their scope and uses

/*Firstly we got the Const variable 
-This Varibale can not be changed after it has been assingned 
-Althogh the scope for it is only to the block itself just like the Let varibale 
-It can be redeclared if used in a diffrent block
*/

const username = 'deadpool2059'; //we are using it store a username as it should not be changed further

// let's test by consoling the output in diffrent blocks

{
 const username = 'deadpool1396'; //The variable username is redeclared here to check if it can be done or not
//Let's print it can check
  console.log(`This is the username inside the block ${username}`);
}

console.log(`This is username outside the block ${username}`); //checking the username outside the block