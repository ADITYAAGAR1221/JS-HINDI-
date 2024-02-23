const accountId = 144553
let accountEmail = "aditya@google.com"
var accountPassword = "12345"
accountCity = "Bhopal" //bad practice
let accountState;

// accountId = 2 //not allowed as const keyword means constant

accountEmail = "hchc@hc.com"
accountPassword = "212121212"
accountCity = "Indore"

console.log(accountId);

/*
prefer not to usr var
because of issue in block scope and functional scope
 */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])