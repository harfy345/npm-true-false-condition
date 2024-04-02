const React = require('react');

function true_then_else_then(condition, item1, item2) {
    try {
        if (typeof condition !== "boolean") {
            console.error("Please enter a valid condition!");
            return null;
        }

        // Check if both parameters are functions
        if (typeof item1 === "function" && typeof item2 === "function") {
            return condition ? item1() : item2(); // Execute functions and return result
        }

        // Check if both parameters are React components
        if (React.isValidElement(item1) && React.isValidElement(item2)) {
            return condition ? item1 : item2; // Return React components
        }

        // If none of the above conditions are met, log an error
        console.error("Please provide either two functions or two React components!");
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}


module.exports = true_then_else_then;
