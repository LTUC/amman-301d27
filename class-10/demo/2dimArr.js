// Nested for loops

// We can use nested for loops to iterate over each element in another array.

// For example, say you had a group of people, and you wanted to everyone to take turns shaking everyone's hand (other than themselves, of course).

// Visualize people sitting in a row. The first person stands up, walks in front and shakes each of the other's hands, and then sits down at the end of the row. Then the next person gets up and does the same thing ... until everyone has gone through the process


let shakeHands = list => {
    for( let i = 0; i <= list.length - 1; i++ ) {
      for( let j = 0; j <= list.length - 1; j++ ) {
        if(list[i] !== list[j]) {
          console.log(`${list[i]} shakes ${list[j]}'s hand.`);
        }
      }
    }
  };
  
  let people = ['Roaa', 'Sara', 'Noor'];
  
  // shakeHands(people);
  
  
  // Two Dimensional Array
  
  // One practical application of using nested for loops is working with multi-dimensional arrays.
  
  // A 2 Dimensional array is simply an array whose elements are also arrays.
  
  
  let table = [
    [2,4,6,5,4,8],
    [1,3,7,9],
    [4,3,8,6]
  ];
  
  for(let i =0;i < table.length ; i++) {
    let line='-)';
    for(let j=0; j< table[i].length ; j++){
      line = line + table [i][j] + ' ';
    }
    // console.log(line);
  }
  
  // ForEach
  table.forEach(val=>{
     let line='-)';
     val.forEach(val2=>{
       line = line+val2+' ';
     })
     console.log(line);
  })
  