const Account_Id = 12345 
//We always use const for declare constant
let Account_Email = "Sourabh Verma"
var Account_Password = "810996"
/* we can declare variable using let or var, but in early Js there is problem of Scope when we declare variable using var that's why we always use let to declare variables*/
/* Prefer not to use var, because of issue in block scope and functional scope
*/
Account_City = "Bhopal" 
/*we can create variable simple giving variable name like Account_City = "Bhopal" But This Not a Good Practice*/
/* Account_Id = 45678 Because we declare this Account_Id as a constant so we can't change it*/
let Account_State
// This give us undefined in output, Because till now We did not defined it
Account_Email = "Aniketverma458"
Account_Password = "56789"
Account_City = "Indore"
console.log(Account_Email);
console.log(Account_Password);
console.log(Account_City)
console.log(Account_State);
console.table([Account_Id,Account_Email,Account_Password,Account_City,Account_State])