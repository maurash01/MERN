const nums=[23,82,183,274,9,24];

for(let i=0; i< nums.length; i++){
    //console.log(nums[i]**2); // Findind square 
}
for (let n of nums){
    //console.log(n**2); // square by loop  
}

console.log('-----------');
nums.forEach((n) => {console.log(n**2);});  // using Callback Functions

// Pushing elements in new array
const num2=[];
for(let n of nums){
    num2.push(n**2);
}
console.log(num2);

