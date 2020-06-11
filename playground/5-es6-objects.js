// Object property shorthand

const name = 'Trump';
const userAge = 6;

const user = {
    name,
    age: userAge,
    location: 'Sun'
};

// Object destructuring

const product = {
    label: 'Red notebook',
    stock: 201,
    price: 3
};

const { label: productLabel, stock, rating =5 } = product;

console.log(productLabel);
console.log(stock);
console.log(rating);

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock);
};

transaction('order', product);