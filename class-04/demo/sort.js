// array.sort( [compareFunction] ) sorts an array in place -- mutating the array.
//There is no return value.

// The compareFunction is a function that is used by sort to evaluate sibling values in turn, and sort in the appropriate order.


/*
If compareFunction(a, b) is less than 0(False), sort a to an index lower than b, i.e. a comes first. '-1'
If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other. '0'
If compareFunction(a, b) is greater than 0 (TRUE), sort b to an index lower than a, i.e. b comes first. '1'
 */

let numbers = [1,5,3,9,11,100,87,44,5,23,67];

    numbers.sort( (a, b) => {
      if (a > b){
        return 1;
      } else if (a < b){
        return -1;
      } else {
        return 0;
      }
   });

    // console.log(numbers);

    

    const people = [
    {name:'Roaa', role:'Developer'},
    {name:'Ahmad', role:'DevEloper'},
    {name:'Mohammad', role:'Manager'},
    {name:'Ali', role:'Support'},
    ];

    people.sort((a,b) => {
       if (a.name.toUpperCase() > b.name.toUpperCase()){
         return -1;
       }
        else 
        {
          return 0;
        }
        
    });

    console.log(people);