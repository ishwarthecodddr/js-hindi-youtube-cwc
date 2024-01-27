//singleton
const obj = new Object()
obj.name= "ishwar"
obj.rollno = 2329125
obj.age = 18
obj.gender = "Male"

console.log(obj)

const newObj = {  //nested object
    name: {
        fullname: {
            username: "ishwar"
        }
    }
}
console.log(newObj.name.fullname.username)

//to combine 2 objects
const obj1 = {"a":1,"b":2} 
const obj2 = { "c": 3, "d": 4 } 
const obj3 = Object.assign({},obj1, obj2)  //giving {}(empty object) is considered as good coding practise where values of obj1 and obj2 is going into {} else it will go into obj1.
const obj4 = {...obj1,...obj2}  //using spread (mostly used)
console.log(obj3)
console.log(obj4)

console.log(Object.keys(obj3))
console.log(Object.values(obj3))

//to check if the property is present in an object or not

console.log(obj3.hasOwnProperty('a'))

//object destructuring
const course = {
    coursename: "javascript",
    coursetype: "tutorial",
    coursduration: 9 //inhours
}

const { coursename : cname } = course;  //coursename can be accessed by cname
console.log(cname)