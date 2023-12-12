/* The spread operator (...) is used here to convert a NodeList returned by document.querySelectorAll into an array.

document.querySelectorAll returns a NodeList, which is a collection of nodes, similar to an array. However, it's not exactly an array and lacks many methods that arrays have, such as map, filter, reduce, etc.

By using the spread operator, we're able to create a new array that contains all the elements from the NodeList. This allows us to use array methods on the result.
 */

const firstList = [...document.querySelectorAll("ul > li:first-child")];
const lastList = [...document.querySelectorAll("ul > li:last-child")];

// En aquest cas no seria necessari spread operator, ja que sí que podem aplicar un forEach a un NodeList

firstList.forEach((li) => (li.textContent = "first"));

lastList.forEach((li) => (li.textContent = "last"));

// with for of

// for (const li of firstList) {
//   li.textContent = "first";
// }

// for (const li of lastList) {
//   li.textContent = "last";
// }
