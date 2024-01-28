function one() {
   const  name = "ishwar"
    function two() {
        website: "github"
        console.log(name)  //child can access the parent values.
    }
    // console.log(website) X  parent cannot access child values.
    two()  
}
one()

//++++++++++++++++++++++++++++++++ INTERESTING ++++++++++++++++++++++++++++++++++++++++++++

//Two types of declaring a function
console.log(one(4))   // this function can be called before initialization also 
function one(num) {
    return num + 1;
}

// console.log(two(3)) this function cannot be called before initialization 
const two = function two(num) {
    return num+1
}