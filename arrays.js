const myArr = [765, 'hello', true, console.log, [1,2,3]];
console.log(myArr);

const movies=['Tere Naam','Animal','PK', 'RRR', 'Deja Vu','Shaitaan',]
console.log(movies.length);

//Indexing 
console.log(movies[4]);
console.log(movies.at(3));

movies[4]='The Shwshank Redemption';
console.log(movies);

console.log(movies.at(-3));

//Slicing
console.log(movies.slice(1,4)); //Also Works for strings
console.log(movies.slice(1,40));
console.log(movies.slice(1));

const price = '₹536.4565/-';
console.log(price.slice(1,7));

//adding new elements 
movies.push('The Dark Knight');// new element at the end of the array 
movies.unshift('The Godfather'); // new element at the starting of an array
console.log(movies);

// removieng elements
movies.pop();
movies.shift()
console.log(movies);
//  movies.splice(3,2);       // It will remove 2 elements starting from index 3 

//movies.splice(3,2, 'Batman', 'Superman', 'Flash'); // It will remove 2 elements starting from index 3 and add 3 new elements.
//console.log(movies);
movies.splice(3,2, 'Batman', 'Superman', 'Flash');
console.log(movies); // adding new elements without removing elements.
