function add(number1, number2) {
    return number1+number2
}
add  // reference
const ans = add(3, 4) //execution of function
console.log("ans : ",ans)

function loggedIn(username = "someone") {  //if no username is given someone is by default loggedIn.
    if (!username) {
        console.log("Plz enter a username")
        return
    }
    return `${username} just logged in .`
}
const a = loggedIn("ishwar")
console.log(a)

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function calculatePrize(...num1) {  //(...) here is known as rest operator that is used to accept dynamic arguments.
    return num1;
}
console.log(calculatePrize(1, 2, 3, 4));  // returns a array .

function handleObject(anyobject) {
    return `Username is ${anyobject.username} and age is ${anyobject.age}`
}
Username = {
    username : "Ishwar",
    age : 18
}
console.log(handleObject(Username))