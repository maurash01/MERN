//const nums=[2,7,3,9,12,62];
//const newNums = nums.map((n) => {return n**2});
//console.log(newNums);

const names=['ramu','shamu', 'pappu', 'kaliya' ];
const newNumms=names.map((n) => {return n.length});
//console.log(newNumms);

const prices = ["₹234.762/-",'₹264.22/-','₹90.1/-','₹123.212/-'];
const cleanedprices = prices.map((p) => { return parseInt(p.slice(1,-2))});
//console.log(cleanedprices);



//const evenNums = nums.filter((n) => {return n%2 ===0 });
//console.log(evenNums);

const newwNum = names.filter((n) => { return n.length >5   });
//console.log(newwNum);

const prices2 = [599,220,199,350,3200, 2830, 1980];
//filter prices bw 500 & 3000
const newprices = prices2.filter((f) => {})
console.log(newprices);

