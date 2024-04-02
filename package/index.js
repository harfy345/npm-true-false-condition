function true_then_else_then(condition, function1, function2) {
    if (typeof condition !== "boolean") {
        console.error("Please enter a valide condition!");
        return;
    }
    if (typeof function1 !== "function" ) {
        console.error("Please provide valid first function!");
        return;
    }
    if (typeof function2 !== "function"){
        console.error("Please provide valid second function!");        
        return;
    }

    try {
        condition ? function1() : function2();
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

module.exports = true_then_else_then;
