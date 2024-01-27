//singleton  (in case of using constructor)  will learn later

//The following is object literals.
const mySym1 = Symbol("Key1")
const mySym2 = Symbol("Key2")
const JsUser = {
    name: "Ishwar",
    age: 18,
    place: "Jamshedpur",
    rollno : 2329125,
    "gender": "male",
    mySym1: "Symbol1",
    [mySym2]: "Symbol2"
}

console.log(JsUser.name)  // first method to access name
console.log(JsUser["name"])  // second method to access name (in Js key are by default of type string)
// console.log(JsUser.gender)  // not possible to access key which is initialised string type with dot 
console.log(JsUser["gender"])

console.log( JsUser.mySym1)  // this is of type string which is not the correct way of using symbol 


console.log(JsUser[mySym2])
console.log(typeof JsUser[mySym2])

JsUser.name = "ishu"
console.log(JsUser.name)
// Object.freeze(JsUser)  //this helps in freezing the key-value pairs further change in object cannot be done.
JsUser.name = "ishy"
console.log(JsUser.name)

JsUser.greeting = function () {
    console.log("Hello JS user")
}
JsUser.greeting2 = function () {
    console.log(`Hello Js user , ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())