
// Task 1: 
// function addNumberClosure(n) {
//         return function(num) {
//           return num + n;
//         }
//       }
//       let addFive = addNumberClosure(5);
//       console.log(addFive(10)); 
//       console.log(addFive(20)); 


// Task 2: 
// function searchArray(arr, val) {
//     if (arr.length === 0) { 
//       return false;
//     } else if (arr[0] === val) {
//       return true;
//     } else { 
//       return searchArray(arr.slice(1), val);
//     }
//   }

//   const myArray = [1, 2, 3, 4, 5];
// console.log(searchArray(myArray, 3)); 
// console.log(searchArray(myArray, 6));


// Task 3: 
function addParagraph(text) {
    const newParagraph = document.createElement('p'); 
    const newText = document.createTextNode(text); 
    newParagraph.appendChild(newText); 
    document.body.appendChild(newParagraph); 
    }
  
// Task 4:
function addListItem(text) {
    const newListItem = document.createElement('li'); 
    const newText = document.createTextNode(text); 
    newListItem.appendChild(newText); 
    const unorderedList = document.querySelector('ul'); 
    unorderedList.appendChild(newListItem); 
  }
  

// Task 5:
function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
  }


// Task 6:
function saveObjectToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }
  let myObject1 = { name: "Aftab Hussain", age: 20, city: "Karachi" };
  saveObjectToLocalStorage("Aftab", myObject1);
    

// Task 7:
function getObjectFromLocalStorage(key) {
    let item = localStorage.getItem(key);
    return JSON.parse(item);
  }
  let myObject = getObjectFromLocalStorage("Aftab");
    console.log(myObject);
  

// Task 8:
function saveObjectPropertiesToLocalStorage(object) {
    for (let prop in object) {
      localStorage.setItem(prop, JSON.stringify(object[prop]));
    }
    let newObj = {};
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      newObj[key] = JSON.parse(localStorage.getItem(key));
    }
    return newObj;
  }
  let myObject2 = { name: "Sadaqat", age: 22, city: "Karachi" };
  let newObject = saveObjectPropertiesToLocalStorage(myObject2);
    
  