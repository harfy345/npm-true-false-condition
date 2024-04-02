const true_then_else_then = require('is-true-then-else-then');



const f1 = ()=>{
    console.log("1");
}
const f2 = ()=>{
    console.log("2");
}
const word = "hello";


true_then_else_then(true, f1,f2);