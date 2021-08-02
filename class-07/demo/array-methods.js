// let testArray = ['301','students', 'are','the','best'];

// -------PUSH------ Add data to the end
// let x = testArray.push(' and 201 students');
// console.log(x);
// console.log(testArray);

// -------UNSHIFT------ Add data to the beginning
// let y = testArray.unshift('My ');
// console.log(y);
// console.log(testArray);

// -------SHIFT------ take off data from the beginning
// let z = testArray.shift();
// console.log(z);
// console.log(testArray);


// -------POP------ take off data from the end
// let c = testArray.pop();
// console.log(c);
// console.log(testArray);

let testArray = ['301','students', 'are','the','best'];

// // ---------toString-------- convert array elements to one string
// let outputArray = testArray.toString();
// console.log(testArray);
// console.log(outputArray);
// console.log(typeof outputArray);

// let obj = {userName:'Ahmad',weight:80};
// console.log(typeof (obj.weight))
// console.log(typeof (obj.weight.toString()))


// // ---------JOIN-------- Convert the elements of an array into a string
// let outputArray2 = testArray.join('-');
// console.log(testArray);
// console.log(outputArray2);



// // ---------SPLIT-------- Split a string into an array of substrings
// let testString = 'helllo world 301'; // ['hello','world']
// let outputArray3 = testString.split('w');
// console.log(testString);
// console.log(outputArray3);


// let strArr = ['ASAC','is','the','best'];
// ----------SLICE--------- select elements from the array (No change on the original array)
// let output = strArr.slice(3,4);
// console.log(strArr);
// console.log(output);

// // ----------SPLICE--------- Insert/Remove elements in the array (Alters the original array)
// let output2 = strArr.splice(1,2); // at position 1 remove 2 items
// console.log(strArr);
// console.log(output2);

// let output = strArr.splice(2,2,'cute'); // at position 2 remove 2 items and add 1 items
// let output = strArr.splice(2,0,'cute'); // at position 2 remove 0 items and add 1 items
// console.log(strArr);
// console.log(output);

// let arr = ['she','is','the','best'];

// Concatenate arrays
// let arr2 = ['and','smart'];
// let arrN = arr.concat(['and','cute'],arr2);
// console.log(arrN);

// userName ->camelCase
// user_name -> snake_case
// user-name -> Kebab-case 
// UserName -> PascalCase

let arr = ['she','is','the','best'];
// Reverse array
// let arr2 = arr.reverse();
// console.log(arr2);
// console.log(arr);

// // Slice wih strings
// let str2 = "Hello world!"; 
// let res = str2.slice(3,7);
// console.log(str2); // Hello world!
// console.log(res); // lo world!

let array=['a',,,'f',5]
console.log(array.length)