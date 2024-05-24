function add(a,b){

    var c = a+b;   // use of var for local values in functions only.
    //console.log(c); //Print Sum of two nos. 
}
add(5,10);
//add(15,20);
//add(343,24);
//console.log(c);

const getAvg = function(m1,m2,m3){
    const avg = (m1+m2+m3)/3;
    //console.log(avg);
    return avg ;         // returning a value


}

const result = getAvg(45,67,89);
//console.log(result);

// arrow functions
const factorial = (n) => {
    let f=1;
    for(i=2;i<=n;i++){
        f=f*i;

    }
    return f;
}
const ans = factorial(5);
console.log(ans); // Finding the factorial of 5 i.e. 120