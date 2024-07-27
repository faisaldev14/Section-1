const user = {
    name: 'Raju',
    email: 'raju@mail.com',
    password: 'abc123'
};

console.log(user.email);
console.log(user['name']);
user.email = 'raju007@mail.com';

console.log(user);

user.address = 'Lucknow';
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const brand = 'Samsung';
const model = 'S24';
const price = 105000;
const colors = ['red', 'black', 'white'];

const smartphone = { brand, model, price, colors };
console.log(smartphone);

const { address } = user;
console.log(address);

console.log(smartphone.price);
console.log(smartphone.colors[1]);

smartphone.colors.push('blue');
console.log(smartphone);
smartphone.colors[2] = 'moonwhite';
console.log(smartphone);

const smartphoneList = [
    {
        brand: 'Samsung',
        model: 'S24',
        price: 105000,
        colors: ['red', 'black', 'white']
    },
    {
        brand: 'OnePlus',
        model: '12',
        price: 44999,
        colors: ['green', 'gray']
    },
    {
        brand: 'Apple',
        model: 'Iphone 15',
        price: 125000,
        colors: ['black', 'white']
    },
    {
        brand: 'Google',
        model: 'Pixel 8',
        price: 56000,
        colors: ['red', 'blue', 'white']
    },
    {
        brand: 'Motorola',
        model: 'G8',
        price: 14999,
        colors: ['blue', 'green']
    },
];

// 1. access the price of apple iphone
// 2. access the last color of google pixel
console.log(smartphoneList[2].price);
console.log(smartphoneList[3].colors.at(-2));
console.log(smartphoneList[3].colors[smartphoneList[3].colors.length - 1]);

const myphones = smartphoneList.filter((phone) => { return phone.price <= 50000 });
console.log(myphones);
// filter all samsung phones
const query = 's';
// const samsungPhones = smartphoneList.filter((phone) => { return phone.brand.toLowerCase() === query.toLowerCase() });
const samsungPhones = smartphoneList.filter((phone) => { return phone.brand.toLowerCase().includes(query.toLowerCase()) });
console.log(samsungPhones);

// filter all phones with white color

console.log( [2, 3, 4].includes(3) );