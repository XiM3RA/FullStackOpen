let myArray = [
  {id: 0, name: "Jhon"},
  {id: 1, name: "Sara"},
  {id: 2, name: "Domnic"},
  {id: 3, name: "Bravo"}
]

const newArray = [...myArray];

newArray[1] = {id: 1, name: "FUCK"};

console.log(myArray);
console.log(newArray);
