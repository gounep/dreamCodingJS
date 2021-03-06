'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['๐','๐'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach -> ์ฝ๋ฐฑํจ์๋ฅผ ๋ฐ์์จ๋ค. ๋ฐฐ์ด์์ ๋ค์ด์๋ value๋ค๋ง๋ค ๋ด๊ฐ ์ ๋ฌํ ํจ์๋ฅผ ํธ์ถ,์ถ๋ ฅํ๋๊ตฌ๋!
fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
});

fruits.forEach((fruit, index) => console.log(fruit, index));

fruits.forEach((fruit) => console.log(fruit));


// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('๐', '๐');
console.log(fruits);

// pop: remove an item from the end
// const popped = fuirts.pop(); pop์ ์ง์์ง๋ ์์ด๊ฐ return๋๋ฏ๋ก ๋ณ์์ ํ ๋นํ  ์ ์๊ฒ ๊ตฌ๋
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('๐', '๐');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unhift are slower than pop, push
// ๋ฐฐ์ด์ item ๋ค์ด ๋ค์ด์์ ๋ ๋ค์์๋ถํฐ ๋ฃ๊ณ  ๋นผ๋ ๊ฒ์ ๋น๊ณต๊ฐ์ ๋ฃ๊ณ  ์ง์ฐ๊ธฐ ๋๋ฌธ์, ๊ธฐ์กด ๋ฐ์ดํฐ๋ค์ ์์ง์ด์ง ์์๋๋จ
// ์์์ ๋ฐ์ดํฐ๋ฅผ ๋ฃ๊ณ  ๋นผ๋ฉด ๊ธฐ์กด ๋ฐ์ดํฐ๋ค์ด ์ด๋ํด์ผํจ -> much slower

// ์ ์ผ ๋ค์์ ์์ดํ์ ์ ๊ทผํ๋ ๊ฒ์ ์ ๋ง ๋น ๋ฅด๊ณ , ์ค๊ฐ์ ๋ฐ์ดํฐ๋ฅผ ๋ฃ๊ณ  ๋นผ๋ ๊ฒ๋ ์ธ๋ฑ์ค๋ฅผ ํ์ฉํ๋ฏ๋ก ๋น ๋ฅด๋ค.
// ํ์ง๋ง ๋ฌด์ธ๊ฐ ๋ฐฐ์ด์ ์ ์ฒด ๋ฐ์ดํฐ๋ค์ด ์ฎ๊ฒจ์ง๋ ๊ธฐ๋ฅ๋ค์ ๋ ๋๋ฆด ์๋ฐ์ ์๋ค. ๋ ๋ฐฐ์ด ๊ธธ์ด๊ฐ ๊ธธ์๋ก ๋ ๋๋ฆฌ๋ค.

// splice: remove an item by index position
// ์ง์ ๋ ์์น์์ ๋ฐ์ดํฐ ์ญ์  ๊ฐ๋ฅ splice(์์์ธ๋ฑ์ค, ๋ช๊ฐ์ง์ธ์ง?)
// ๋ช๊ฐ ์ง์ธ์ง ์ง์ ํ์ง ์์ผ๋ฉด ์ง์ ํ ์ธ๋ฑ์ค๋ถํฐ ๋ชจ๋  ์ธ๋ฑ์ค๋ฅผ ์ง์ด๋ค
fruits.push('๐ฅ', '๐ฅฅ', '๐');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '๐', '๐'); // splice ํ ์ํ๋ ๋ฐ์ดํฐ ์ถ๊ฐ๋ ๊ฐ๋ฅ
console.log(fruits);

// combine two arrays
const fruits2 = ['๐', '๐ฅจ'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
// indexOf: find the index
// ์ ์ผ ์ฒซ๋ฒ์งธ๋ก ํด๋นํ๋ ์ธ๋ฑ์ค ์ถ๋ ฅ
// ์๋ ๊ฐ ์ถ๋ ฅํ๋ฉด -1
// console.clear();
console.log(fruits);
console.log(fruits.indexOf('๐'));
console.log(fruits.indexOf('๐'));
console.log(fruits.indexOf('๐'));

// includes
// ํฌํจ๋์ด ์์ผ๋ฉด true, ํฌํจ๋์ด ์์ง์์ผ๋ฉด false
console.log(fruits.includes('๐'));
console.log(fruits.includes('๐'));

// lastIndexOf
// ์ ์ผ ๋ง์ง๋ง์ ๋ค์ด์๋ ์ธ๋ฑ์ค ์ถ๋ ฅ
// console.clear();
fruits.push('๐');
console.log(fruits);
console.log(fruits.indexOf('๐'));
console.log(fruits.lastIndexOf('๐'));


// ๋น์ทํ type์ object๋ค์ ๋ฌถ์ด๋๋ ๊ฒ -> ์๋ฃ๊ตฌ์กฐ
// ๋ณดํต์ ์๋ฃ๊ตฌ์กฐ์๋ ๋์ผํ type์ object๋ฅผ ๋ด์ ์๋ง ์๋ค
// ํ์ง๋ง JS ๋ dynamically typed language๋ผ์ ํ๋ฐ๊ตฌ๋์ ๋ค์ํ ์ข๋ฅ์ data๋ฅผ ๋ด์ ์ ์๋ค
// ๊ฐ๋ฅ์ ํ์ง๋ง ๊ทธ๋ ๊ฒ ํ๋ก๊ทธ๋๋ฐ ํ๋๊ฑด ์ข์ง์๋ค
// ์๋ฃ๊ตฌ์กฐ & ์๊ณ ๋ฆฌ์ฆ -> ์ฝ์, ์ญ์ , ๊ฒ์, ์ ๋ ฌ

// ๋ฐฐ์ด : ์นธ์นธ์ด ์ด์ดํ ๋ชจ์ฌ์๋ ์๋ฃ๊ตฌ์กฐ, ์ธ๋ฑ์ค ์ง์ ๋์ด์๋ค (0๋ถํฐ ์์)