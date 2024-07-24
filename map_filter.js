// WAP to create a new array containing only perfect squares from another array.

const nums =[1,4,16,64,54,81,65,34,43,43];
const perfect =[];

for(let i of nums){
    if(Number.isInteger(i** 0.5)){
        // console.log(i);
        perfect.push(i);
    }
}
console.log(perfect);

// WAP to create  a new array containing 10% discounted prices from an array of prices.

const prices = [10,210,280,399,550];
const discounted = [];
for(let p of prices){
    discounted.push(p*0.9);
}
console.log(discounted);

// MAP

const discountedPrices= prices.map((p) => {return p*0.9});
console.log(discountedPrices);

// square of all numbers

const sqrNums = prices.map((n) => { return n**2});
console.log(sqrNums);


const perfectNums = nums.filter((n) => { return Number.isInteger(n**0.5)});
console.log(perfectNums);

const prices2 = ['₹423.23','₹123.452','₹678.9','₹999.9982'];
const intPrices = prices2.map((p) => {return parseInt(p.slice(1))});
console.log(intPrices);

console.log(parseInt('₹423.23' .slice(1)));


const names =['ramu','shamu','pinki','kaliya'];
console.log();