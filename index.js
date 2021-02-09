// // Import stylesheets
// import './style.css';

// // Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

// let array = [38, 2, 44, 100, 8, 61, 80, 0]
// let num = [30, 35, 40, 55, 7, 2, 54, 16, 0]

// let temp = 0
// for(let i = 0; i < array.length; i++){
//   for(let j = 0; j < i; j++) {
//     if(array[i] < array[j]){
//       temp = array[j];
//       array[j] = array[i];
//       array[i] = temp
//     }
//   }
// }
// console.log(array)

// let newTemp = 0;
// for(let k = 0; k < num.length; k++){
//   for(let f = k + 1; f < num.length; f++){
//     if(num[f] < num[k]){
//       newTemp = num[f]
//       num[f] = num[k]
//       num[k] = newTemp
//     }
//   }
// }

// console.log(num)

// let array1 = ['pasta', 'salad', 'noodle soup'];
// let array2 = ['dumplings', 'sushi', 'steak'];
// for(let i = 0; i < array1.length; i++) {
//   array2.push(array1[i])
// }
// console.log(array2)

// let students = [
//   {id: 2348, 
//     name: 'Eric Hodge'
//   },
//   {id: 567, 
//     name: 'Daniel Evans'
//   },
//   {id: 345, 
//     name: 'Carlos Negron'
//   },
//   {id: 132, 
//     name: 'Hassan Khan'
//   },
//   {id: 567, 
//     name: 'Brett Bucsak'
//   },
//   {id: 323, 
//     name: 'Gianna Pena'
//   },
// ];

// console.log(students[0].name.charCodeAt(0))
// console.log(students.length)

// for(let i = 0; i < students.length; i++){
//   for(let j = i + 1; j < students.length; j++){
//     if(students[i].name.charCodeAt(0) < students[j].name.charCodeAt(0)){
//     let temp = students[j]
//     students[j] = students[i]
//     students[i] = temp
//     }
//   }
// }
// console.log(students)


let array = [
  "Amazon", "Tesla", "Disney", 
  "Entertainment", "Ecommerce", "Innovation"
];

function makeMultiDArray(array) {
  let temp = array[4]
  array[4] = array[5]
  array[5] = temp;
  let newArray = []
  let count = array.length -1;
  for(let i = 0; i < array.length/2; i++){
    newArray.push([array[i], array[count]])
    count--
  }
  console.log(newArray)
}

makeMultiDArray(array);

// function makeMultiDimentionalArray(arr) {
//   let companies = arr.slice(0, 3);
//   let sectors = arr.slice(3, 6);
//   let multiD = [];
//   for(let i = 0; i < arr.length / 2; i++) {
//     multiD.push([companies[i], sectors[i]]);
//   }
//   return multiD;
// }

// console.log(makeMultiDimentionalArray(array))

let crazyArray = [
 "Elon Musk",
 "Bootcamp",
 3,
 5,
 { a: 2, b: 8 },
 "#",
 { language: "Japanese", greeting: "#" },
 767,
 34,
 "#",
 ["Tomato", "#", "PineApple"],
 { sports: "#" }
];


function replaceHash(array) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === "#"){
      console.log("Hash at: " + i +" index")
    }
      if("#" === array[i]["#"]){
        console.log("Hash in another array: ")
      }
  }
}

replaceHash(crazyArray)