const JavascriptForReact = () => {
  return <div>JavascriptForReact</div>;
};
export default JavascriptForReact;

//----------------------------------------------------------------
//---------------Declaring Variables and Scoping-----------------------------------
//----------------------------------------------------------------
// var pizza = true;
// pizza = false;
// console.log(pizza);

// let pommes = true;
// pommes = false;
// console.log(pommes);

// const hamburger = true;
// hamburger = false;
// console.log(hamburger);     // will display an error

// Block Variable scope
// var topic = "JavaScript";
// if (topic) {
//   var topic = "React";              // declaring globally - resets the global variable
//   console.log(topic, "block");
// }
// console.log(topic, "global");

// let topic = "JavaScript";
// if (topic) {
//   let topic = "React"; // let protects the global variable
//   console.log(topic, "block");
// }
// console.log(topic, "global");

//Returning objects - do not forget braces
// const person = (firstname, lastname) => ({
//   first: firstname,
//   last: lastname,
// });

// console.log(person("Brad", "Johnson"));

//Arrow functions and scoping

// const cars = {
//   brands: [
//     "Volkswagen",
//     "Tesla",
//     "Lucid",
//     "Daimler",
//     "Opel",
//     "RollsRoyce",
//     "Bentley",
//   ],
//   print: function (delay = 3000) {
//     setTimeout(() => {
//       console.log(this.brands.join(", "));
//     }, delay);
//   },
// };

// cars.print();

//Object and Arrays

// const sandwich = {
//   bread: "dutch crunch",
//   meat: "tuna",
//   cheese: "swiss",
//   toppings: ["lettuce", "tomato", "mustard"],
// };

// const { bread, toppings } = sandwich;
// console.log(bread, toppings[1]);

// const [...firstAnimal] = ["Horse", "Dog", "Cat"];
// console.log(firstAnimal);
