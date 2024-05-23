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

