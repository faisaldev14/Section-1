function addNumsv1 (a,b)
{
    return [a+b,a*b]
}

const res = addNumsv1 (345,4356);

console.log(res);

const [sum,prod] = res;
console.log(prod);



const addNumsv2 = function (a,b){
    return  a + b;

}

const res2 = addNumsv2(345,723);
console.log(res2);


const addNums = (a,b) => {
    return a+b;
}

const res3 = addNums (345,723);
console.log(res3);



// map


const nums =[1,2,3,4,5,6];

const newNums = [];

for (let n of nums){
    newNums.push(n+1);

}

console.log(newNums);

const sqrs = nums.map((n) => {return n+1});
console.log(sqrs);

const evenNums = nums.filter((n) =>{return nums[345]});
console.log(evenNums);