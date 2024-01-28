//Immediately Invoked Function Expressions (IIFE)
//we use IIFE because there is pollution in function due to global variables.
/* ()() first brackets is for function decalaration and second for IIFE */

(function add(num) { //this is named IIFE
    return num
})();
//to stop IIFE we must use ;
((name) => {     //unnamed IIFE with parameters
    console.log(name)
})("Ishwar");