const arr = new Array(0,1,2,3,4,5)
// console.log(arr)

const arr1 = arr.slice(1, 3)
console.log(arr)
console.log("A",arr1)

const arr2 = arr.splice(1, 3)
console.log(arr)
console.log("B",arr2)

//The difference between slice and splice is in case of slice there is a copy of arr that is changed but in case of splice the original array is changed. ( Ofcourse the last index is included in case of slice while it is not included in case of splice)

const Marvel_heroes = ["IronMan","Spiderman","CAmerica","DStrange"]
const Dc_heroes = ["Superman", "Aquaman", "Flash", "Cyborg"]
const all_heroes = Marvel_heroes.concat(Dc_heroes)  // adds two arrays
console.log(all_heroes)
const all_heroes1 = [...Marvel_heroes, ...Dc_heroes]   //this is the spread way of adding two arrays
console.log(all_heroes1)

const complicated = [1, 2, [3, 4, 5], [6, [7, 8]]]
console.log(complicated)
const simple = complicated.flat(1)  //this method simplify the array.(we can use infinity in place of 1 to completely simplify the array)

console.log(simple)


console.log(Array.isArray("ishwar"))  //checks whether the given argument is array or not
console.log(Array.from("ishwar"))  //converts the given argument into array.

console.log(Array.from({
    name : "Ishwar",                   // interesting case in case of object . 
    class : 21
}))

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3))   //returns a new array from a set of elements . 

