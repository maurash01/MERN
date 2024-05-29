const student={
    name: 'Ramu',
    rollno : 2465362,
    email : 'ramu@gmail.com'
}
console.log(student.name);
console.log(student['name']); //2nd Method

student.address = 'Lucknow';
console.log(student);
student.rollno = 7654321;
console.log(student);

//All keys and values at once 
console.log(Object.keys(student));
console.log(Object.values(student));

const smartphone ={
    brand : 'Samsung',
    model : 'S23',
    price : 79000,
    colors : ['black','grey','white']
}
console.log(smartphone.price);
console.log(smartphone.colors[1]); // 1 element from the array 
smartphone.colors.push('green'); // adding new color in array
console.log(smartphone);

const smartphoneList = [
    {brand : 'Samsung',model : 'S23', price : 79000, colors : ['black','grey'] },
    {brand : 'Mi',model : 'Note13', price : 15000, colors : ['black','red','white'] },
    {brand : 'Oneplus',model : '12R', price : 45000, colors : ['black','green'] },
    {brand : 'Nokia',model : 'Lumia', price : 25000, colors : ['red','yellow'] },
    {brand : 'Apple',model : '17', price : 13000, colors : ['silver','white','black'] },
    {brand : 'Samsung',model : 'A55', price : 39999, colors : ['white','black'] },

    
];
console.log(smartphoneList.length); // printing from inside an object
console.log(smartphoneList[0].length);    // printing lenght  inside an object 
console.log(smartphoneList[0].brand.length);    // printing from inside an object  but object doesnt give length.
console.log(smartphoneList[0].model.length);    // printing from inside an object of model 
console.log(smartphoneList[0].colors[0]);    // printing from inside an object 


console.log(smartphoneList[0].colors.push('blue'));    // printing from inside an object 
console.log(smartphoneList);    // printing from inside an object 

// price of 4th smartphone 

console.log(smartphoneList[3].price);
console.log('*******************************');

// Filter all smartphones lower than 30000 
const budgetPhones = smartphoneList.filter(( phone ) => { return phone.price < 30000});
console.log(budgetPhones);
console.log('--------------');

// filter all smartphones with brand "Samsung"

const samsungphones = smartphoneList.filter((phone) => { return phone.brand=== 'Samsung'});
console.log(samsungphones);
console.log("----------------------");
  

// Filter all samrtphones with color "black"
//Hint: console.log(["a","b","c"].includes("c"))
const colorphones = smartphoneList.filter((phone)=> {return phone.colors.includes('black')});
console.log(colorphones);




