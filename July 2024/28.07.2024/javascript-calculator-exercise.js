// # JavaScript Calculator Exercise

// ## Objective
// Create a simple calculator program using JavaScript. This exercise will reinforce your understanding of functions, conditional statements, arithmetic operations, and introduce you to some built-in JavaScript math methods.

// ## Part 1: Basic Arithmetic Functions

// ### Task
// Create functions for basic arithmetic operations.
let a;
let b;

function Addition(a,b) {
    a = a + b
    return console.log(a);
}

function subtraction(a,b) {
    a = a - b
    return console.log(a);
}

function multiplication(a,b) {
    a = a * b
    return console.log(a);
}


function divide(a,b) {
    a = a / b
    return console.log(a);
}
// ### Requirements
// - Create separate functions for addition, subtraction, multiplication, and division.
// - Each function should take two parameters and return the result of the operation.

// ### Hints
// - Use arithmetic operators (+, -, *, /) within these functions.
// - Remember to handle division by zero in your division function.

// ### Resources
// - [JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)
// - [JavaScript Arithmetic](https://www.w3schools.com/js/js_arithmetic.asp)

// ## Part 2: Advanced Math Functions
function powerOfNumber(a,b) {
    a = a ** b
    return console.log(a);
}

function squareRootNum(a) {
    a = Math.sqrt(a)
    return console.log(a);
}

function absoluteNumberValue(a,b) {
    let positive = a
    let negative = b

    positive = Math.abs(a)
    negative = Math.abs(b)

    return console.log(a,b);
}

// ### Task
// Create functions for more advanced mathematical operations.

// ### Requirements
// - Create functions for:
//   1. Calculating the power of a number
//   2. Finding the square root of a number
//   3. Calculating the absolute value of a number

// ### Hints
// - Use the Math object for these operations (Math.pow(), Math.sqrt(), Math.abs()).
// - Remember to handle invalid inputs (e.g., negative numbers for square root).

// ### Resources
// - [JavaScript Math Object](https://www.w3schools.com/js/js_math.asp)

// ## Part 3: Operation Selection
function isUserInput(a, b) {
    let isUserArithmetic = prompt(`Type the number of the function you would like to use:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Divide\n5. Power of Number\n6. Square Root Number\n7. Absolute Number Value`);

    while (isNaN(isUserArithmetic) || isUserArithmetic < 1 || isUserArithmetic >= 7) {
        isUserArithmetic = prompt(`Please enter a valid number between 1 and 7:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Divide\n5. Power of Number\n6. Square Root Number\n7. Absolute Number Value`);
    }

    isUserArithmetic = parseInt(isUserArithmetic);

    a = parseFloat(prompt(`Provide the first number:`));
    b = parseFloat(prompt(`Provide the second number:`));

    while (isNaN(a) || isNaN(b)) {
        a = parseFloat(prompt(`Please provide a valid first number:`));
        b = parseFloat(prompt(`Please provide a valid second number:`));
    }

    if (isUserArithmetic === 1) {
        Addition(a, b);
    } else if (isUserArithmetic === 2) {
        subtraction(a, b);
    } else if (isUserArithmetic === 3) {
        multiplication(a, b);
    } else if (isUserArithmetic === 4) {
        divide(a, b);
    } else if (isUserArithmetic === 5) {
        powerOfNumber(a, b);
    } else if (isUserArithmetic === 6) {
        squareRootNum(a);
    } else if (isUserArithmetic === 7) {
        absoluteNumberValue(a);
    }
}
isUserInput(a,b)
// ### Task
// Create a function that selects which operation to perform based on user input.

// ### Requirements
// - The function should take three parameters: two numbers and an operation symbol.
// - It should call the appropriate function based on the operation symbol.
// - Handle invalid operation symbols with an error message.

// ### Hints
// - Use if...else statements or a switch statement to select the operation.
// - Consider using string comparison for the operation symbol.

// ### Resources
// - [JavaScript if...else Statements](https://www.w3schools.com/js/js_if_else.asp)
// - [JavaScript Switch Statement](https://www.w3schools.com/js/js_switch.asp)

// ## Part 4: User Input and Output

// ### Task
// Create functions to handle user input and display results.

// ### Requirements
// - Create a function to prompt the user for two numbers and an operation.
// - Create a function to display the result or error message.

// ### Hints
// - Use the prompt() function to get user input.
// - Remember to convert string inputs to numbers where necessary.
// - Use template literals for formatting the output string.

// ### Resources
// - [JavaScript Popup Boxes](https://www.w3schools.com/js/js_popup.asp)
// - [JavaScript Type Conversion](https://www.w3schools.com/js/js_type_conversion.asp)
// - [JavaScript Template Literals](https://www.w3schools.com/js/js_string_templates.asp)

// ## Part 5: Main Calculator Function

// ### Task
// Create the main function that runs the calculator program.

// ### Requirements
// - The function should call the input function to get user input.
// - It should then call the operation selection function with the user's input.
// - Finally, it should display the result using the output function.

// ### Hints
// - Think about the order in which you need to call these functions.
// - Consider how you'll handle and display errors.

// ### Resources
// - [JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)

// ## Bonus Challenges
// 1. Add memory functions (M+, M-, MR, MC) to your calculator.
// 2. Implement a simple unit conversion feature (e.g., kilometers to miles).
// 3. Add a feature to calculate the factorial of a number.

// ## Final Steps
// - Test your calculator with various inputs, including edge cases.
// - Ensure all functions work correctly and handle errors gracefully.
// - Add comments to your code explaining what each function does.

// Remember to apply the concepts of functions, conditional statements, arithmetic operations, and the Math object throughout your solution. Enjoy building your calculator!

// [JavaScript Tutorial](https://www.w3schools.com/js/default.asp)
