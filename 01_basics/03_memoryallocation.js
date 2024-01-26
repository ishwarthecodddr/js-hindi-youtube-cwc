//primitive(stack memory)  and non-primitive or refrence (heap memory)
//     (copy)                                  (refrence)

let myname = "Ishwar";
newName = myname;
 newName = "ishu";
console.log(myname);
console.log(newName);

let object = {
    name: "ishwar",
    rollno: 2329124,
}
let newObject = object;
newObject.name = "ishu"
console.log(object.name);
console.log(newObject.name);

//for clarity 
//"C:\Users\KIIT0001\Desktop\javaScript\memoryallocation_mindmap.png"