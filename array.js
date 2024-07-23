const arr1 = ['hello' ,'34567', 'false','null'];
console.log(arr1 [3]);
console.log(typeof arr1);
console.log(Array.isArray (arr1));

const movies = ['dangal','kill','manji','ddlj','jawan','pk'];

console.log(movies.length);   //also works with stirngs
//indexing

console.log(movies[3]); //also works with strings 
console.log(movies.at(-2));  //also works with strings 

movies[3]= 'krishh';
console.log(movies);
console.log(movies.indexOf('kill'));


// slicing

console.log(movies);
console.log(movies.slice(2,5));
console.log(movies.slice(2,-3));
console.log(movies.slice(2));
console.log(movies.slice(2,60));

// adding and removing elements 

movies.push('kalki 2980 AD'); //adds elements at the end  of an array
console.log(movies);

movies.unshift('kgf'); //adds elements at a start  of an array
console.log(movies);

movies.pop(); //removes element from end of array
movies.shift(); //removes element from start of array

console.log(movies);

// movies.splice(3,2); //removes two element starting from index 3
// movies.splice(3,2,'deadpool','venom'); //replacing elements
movies.splice(3,0,'deadpool','venom'); //replacing elements
console.log(movies);