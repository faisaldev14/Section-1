function addNums(a, b) {
    var c = a + b;
    console.log(c);
}
addNums(3, 5);
// 

const getAvg = function (m1, m2, m3) {
const avg = (m1+m2+m3)/3;

// console.log(avg);
return avg;
}

let result =   getAvg (78,89,90);
console.log(result);
// factorial


const factorial =(n) => {
     let f = 1;
     for (let i = 1; i<=n; i++){
        f =f*i;
     }
     return f;
}
let ans = factorial (6);
console.log(ans);



// wap to find sum of all number in a given range
const sumofrange = (range1,range2) => {
    let x = 0;
    for(let i=range1; i<=range2;i++){
        x=x+i;
    }
    return x;
}
console.log(sumofrange(8,10));

// . WAP to print all prime numbers in a range.


function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    
    return true;
}

function printPrimesInRange(start, end) {
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            console.log(num);
        }
    }
}



