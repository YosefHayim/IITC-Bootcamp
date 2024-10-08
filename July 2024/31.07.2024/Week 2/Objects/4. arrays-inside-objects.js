// # Working with Arrays Inside Objects in JavaScript

// Arrays and objects are two fundamental data structures in JavaScript. Combining them by using arrays as properties within objects can create powerful and flexible data representations. This lesson will focus on how to work with arrays that are properties of objects.

// ## Table of Contents
// 1. [Basic Structure](#basic-structure)
// 2. [Accessing Arrays in Objects](#accessing-arrays-in-objects)
// 3. [Modifying Arrays in Objects](#modifying-arrays-in-objects)
// 4. [Iterating Over Arrays in Objects](#iterating-over-arrays-in-objects)
// 5. [Common Use Cases](#common-use-cases)
// 6. [Practice Exercises](#practice-exercises)

// ## Basic Structure

// An array inside an object is simply a property whose value is an array. Here's a basic example:

// ```javascript
// let person = {
//     name: "Alice",
//     age: 30,
//     hobbies: ["reading", "swimming", "coding"]
// };
// ```

// In this example, `hobbies` is an array inside the `person` object.

// ## Accessing Arrays in Objects

// To access an array inside an object, you first access the object property, then use standard array notation:

// ```javascript
// console.log(person.hobbies);        // Outputs: ["reading", "swimming", "coding"]
// console.log(person.hobbies[0]);     // Outputs: "reading"
// console.log(person.hobbies.length); // Outputs: 3
// ```

// ## Modifying Arrays in Objects

// You can modify these arrays just like any other array:

// ```javascript
// // Add a new hobby
// person.hobbies.push("painting");

// // Remove the last hobby
// let lastHobby = person.hobbies.pop();

// // Modify an element
// person.hobbies[1] = "running";

// console.log(person.hobbies); // Outputs: ["reading", "running", "coding"]
// ```

// ## Iterating Over Arrays in Objects

// You can use any standard array iteration method:

// ```javascript
// // Using for...of loop
// for (let hobby of person.hobbies) {
//     console.log(hobby);
// }

// // Using forEach
// person.hobbies.forEach(hobby => {
//     console.log(hobby);
// });

// // Using map
// let uppercaseHobbies = person.hobbies.map(hobby => hobby.toUpperCase());
// ```

// ## Common Use Cases

// 1. **Todo List**: Storing tasks for different categories.

// ```javascript
// let todoList = {
//     work: ["Finish project", "Call client"],
//     personal: ["Buy groceries", "Go to gym"]
// };
// ```

// 2. **User Profiles**: Storing lists of friends, posts, or preferences.

// ```javascript
// let userProfile = {
//     username: "cooluser123",
//     posts: ["Hello world!", "Having a great day!"],
//     friends: ["user1", "user2", "user3"]
// };
// ```

// 3. **Inventory System**: Keeping track of items in different categories.

// ```javascript
// let inventory = {
//     fruits: ["apple", "banana", "orange"],
//     vegetables: ["carrot", "broccoli", "spinach"],
//     dairy: ["milk", "cheese", "yogurt"]
// };
// ```

// ## Practice Exercises

// 1. Create an object representing a library. It should have properties for different genres, each containing an array of book titles.

// 2. Add a new book to the "fantasy" genre in your library object.

// 3. Create a function that takes the library object and a genre as parameters, and returns the number of books in that genre.

// 4. Create an object representing a school. It should have properties for different subjects, each containing an array of student names who are enrolled.

// 5. Write a function that adds a new student to a specific subject in the school object.

// 6. Create a function that prints out all students enrolled in a particular subject.

// Remember, practice is key to mastering these concepts. Try to come up with your own examples and scenarios where using arrays inside objects would be beneficial!