//TODO -Create a function that can divide an object keys and values into a singular objects and store them inside an array.

//NOTE - objectArray([{name: "Ali Kahwaji", City: "Nelson", Postcode: 7010}])
// ANS: [{name: "Ali Kahwaji"}, {City: Nelson}, {Postcode: 7010}]

// Not with an array but with
// function objectArray(obj) {
//     var result = [];
    
//     for (var key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         var newObj = {};
//         newObj[key] = obj[key];
//         result.push(newObj);
//       }
//     }
    
//     return result;
//   }
  
//   // Example usage
//   var myObject = {
//     name: 'John Doe',
//     address: '123 Main St',
//     phone: '555-1234'
//   };
  
//   var dividedObjects = objectArray(myObject);
//   console.log(dividedObjects);

//REVIEW - How another way to do it 

// 1st attempt
// function objectArray1(arr) {
//     let newArray = [], newObj = {}

//     arr.forEach(el=> {
//         for (let i = 0; i < (el['last_name']); i++) {
//             newObj['first_name'] = el.first_name
//             newObj['last_name'] = el.last_name
//             newArray.push(newObj)
//         }
//     })
//     return newArray
// }

// console.log(objectArray1([{name: "Ali Kahwaji", City: "Nelson", Postcode: 7010}]))

// 2nd attempt
// const objectArray = arr => arr.reduce((a, b) => {
//     for (let i = 0; i < b.last_name; i++) {
//         a.push({...b,  last_name: last_name})
//     }
//     return a 

// }, [])


//TODO - Create a function that passes through an object 
//NOTE - const obj = {first_name: "Ali", last_name: "Kahwaji"}
//NOTE - let {first_name: "Ali", last_name: "Kahwaji"} = obj

// const str = `({first_name = "Ali", last_name = "Kahwaji"} = {first_name: Ali, last_name: Kahwaji}).toString()`
// console.log(str)

//TODO - Write a function that will reverse a string by word.

//console.log(reverseWord("Ali Kahwaji")) -> Ali Kahwaji

// function reverseWord(str) {
//     return str.split(" ").reverse().join(" ")

// }
// console.log(reverseWord("Ali Kahwaji"))

//TODO - Create a function that switches the key and value of an object.

//NOTE - objfunc(obj) | objfunc({"name" : "Ali"} -> ("Ali" : "name"))

function objFunction(obj) {
    return Object.fromEntries (
        Object.entries(obj).map(([key, value]) => [value, key]
    )) 
}

console.log(objFunction({"name" : "Ali"}))

//REVIEW - Another way to do it

function objfunc(obj) {
    let newObj = {}
    for(let key in obj) {
       newObj[obj[key]] = key
    }
    return newObj
}
    
console.log(objfunc({"name": "Dom"}))


function reversedNum(num) {
    return (
      parseFloat(
        num
          .toString()
          .split('')
          .reverse()
          .join('')
      ) * Math.sign(num)
    )                 
  }


