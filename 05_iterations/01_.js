const myObj = {
    name: "Ishwar",
    gender: "male",
    rollno :2329125 
}
for (const value in myObj) {
    console.log(` ${value}: ${myObj[value]}`)
}

const myArr = ["A", "B", "C", "D"]
for (const value in myArr) {
    console.log(myArr[value])
}

myArr.forEach(function (value) {
    console.log(value)
})
//We can also create a function and give its reference in forEach loop


const map = new Map()
map.set("IN","India")
map.set("USA","America")
map.set("Fr","France")
map.set("IN", "India")

console.log(map)
for (const key in map) {
    console.log(key)     //this gives nothing because map is not iterable.
}

const objArr = [
    {
        LanguageName: "Python",
        LanguageExt : "Py",
    },
    {
        LanguageName: "Java",
        LanguageExt : "Java",
    },
    {
        LanguageName: "Javascript",
        LanguageExt : "js"
    }
]
//accessing values of object using forEach
objArr.forEach((value)=>{
    console.log(value.LanguageName)
})

const mynewNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const newNums = mynewNums.filter((nums) => {
    return nums>4
})
console.log(newNums)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
const myLike = books.filter((bk) => {return bk.publish >2000})  //don't forget to put return in case of scope meaning whenever using {}
console.log(myLike)