import _ from "lodash";

const FunctionalProgramming = () => {
  return <div>FunctionalProgramming</div>;
};
export default FunctionalProgramming;

//Immutability - Object.assign, array.concat, spread operator and

//Pure functions

//Data Transformation

// const schools = ["Cambridge", "Harvard", "Yale", "Princeton"];

// const schoolH = schools.filter((school) => school !== "Harvard");
//console.log(schoolH);

// const highSchools = schools.map((school) => ({ name: school }));
// console.log(highSchools);
// const editName = (oldName, name, arr) => {
//   arr.map((item) => (item.name === oldName ? { ...item, name } : item));
// };

// let updatedSchools = editName("Harvard", "TUBraunschweig", highSchools);
// console.log(updatedSchools);

// const newSchools = {
//   Cambridge: 2,
//   Harvard: 9,
//   Yale: 6,
//   Princeton: 8,
// };

// const newSchoolsArray = Object.keys(newSchools).map((school) => ({
//   name: school,
//   wins: newSchools[school],
// }));

//console.log(newSchoolsArray);

//console.log(Object.entries(newSchools));

// const numbers = [22, 11, 4343, 23, 545, 4, 2, 67, 9999];

// const maxNumber = numbers.reduce((i, j) => {
//   return i > j ? i : j;
// }, 0);

// console.log(maxNumber);

// const colors = [
//   {
//     id: 1,
//     color: "red",
//     rating: 5,
//   },
//   {
//     id: 2,
//     color: "blue",
//     rating: 5,
//   },
//   {
//     id: 3,
//     color: "green",
//     rating: 5,
//   },
// ];

// const hashColors = colors.reduce((hash, { id, color, rating }) => {
//   hash[id] = { id, color, rating };
//   return hash;
// }, {});

// const hashColors = _.mapKeys(colors, "id");

// console.log(hashColors);

const people = { politics: "Obama", football: "Messi", actor: "Keanu Reeves" };

console.log(people);
const topic = "Manager";
const person = "Elon Musk";
const newPeople = { ...people, [topic]: person };

console.log(newPeople);
