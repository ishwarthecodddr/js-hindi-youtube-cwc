const mynewNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newValue = mynewNums
    .map((nums) => nums * 10)
    .map((nums) => nums + 1)
    .filter((nums)=>(nums>20))
console.log(newValue)

//concept of reduce in array 
const total = mynewNums.reduce(function (accum, currVal) {
    console.log(`accu : ${accum} and currval : ${currVal}`)
    return accum + currVal;
},0)  //this 0 is accumulator initial value 
console.log(`total: ${total}`)
//simplified version of reduce 
const total2 = mynewNums.reduce((accu, currVal) => accu+currVal, 0)
console.log(`total2:${total2}`)

//Example
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
//to return total price of the courses
const totalPrice = shoppingCart.reduce((accum, item) => (accum + item.price), 0)
console.log(`Total price for the course is ${totalPrice} rs`)