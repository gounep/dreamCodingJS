'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['🍎','🍌'];
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

// c. forEach -> 콜백함수를 받아온다. 배열안에 들어있는 value들마다 내가 전달한 함수를 호출,출력하는구나!
fruits.forEach(function (fruit, index, array) {
  console.log(fruit, index, array);
});

fruits.forEach((fruit, index) => console.log(fruit, index));

fruits.forEach((fruit) => console.log(fruit));


// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍊');
console.log(fruits);

// pop: remove an item from the end
// const popped = fuirts.pop(); pop은 지워지는 아이가 return되므로 변수에 할당할 수 있겠구나
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍉', '🍋');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unhift are slower than pop, push
// 배열에 item 들이 들어있을 때 뒤에서부터 넣고 빼는 것은 빈공간에 넣고 지우기 때문에, 기존 데이터들은 움직이지 않아도됨
// 앞에서 데이터를 넣고 빼면 기존 데이터들이 이동해야함 -> much slower

// 제일 뒤에서 아이템을 접근하는 것은 정말 빠르고, 중간에 데이터를 넣고 빼는 것도 인덱스를 활용하므로 빠르다.
// 하지만 무언가 배열의 전체 데이터들이 옮겨지는 기능들은 더 느릴 수밖에 없다. 또 배열 길이가 길수록 더 느리다.

// splice: remove an item by index position
// 지정된 위치에서 데이터 삭제 가능 splice(시작인덱스, 몇개지울지?)
// 몇개 지울지 지정하지 않으면 지정한 인덱스부터 모든 인덱스를 지운다
fruits.push('🥝', '🥥', '🍇');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🍒', '🍑'); // splice 후 원하는 데이터 추가도 가능
console.log(fruits);

// combine two arrays
const fruits2 = ['🍞', '🥨'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
// indexOf: find the index
// 제일 첫번째로 해당하는 인덱스 출력
// 없는 값 출력하면 -1
// console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🍒'));
console.log(fruits.indexOf('🍑'));

// includes
// 포함되어 있으면 true, 포함되어 있지않으면 false
console.log(fruits.includes('🍒'));
console.log(fruits.includes('🍉'));

// lastIndexOf
// 제일 마지막에 들어있는 인덱스 출력
// console.clear();
fruits.push('🍓');
console.log(fruits);
console.log(fruits.indexOf('🍓'));
console.log(fruits.lastIndexOf('🍓'));


// 비슷한 type의 object들을 묶어놓는 것 -> 자료구조
// 보통은 자료구조에는 동일한 type의 object를 담을 수만 있다
// 하지만 JS 는 dynamically typed language라서 한바구니에 다양한 종류의 data를 담을 수 있다
// 가능은 하지만 그렇게 프로그래밍 하는건 좋지않다
// 자료구조 & 알고리즘 -> 삽입, 삭제, 검색, 정렬

// 배열 : 칸칸이 촘촘히 모여있는 자료구조, 인덱스 지정되어있다 (0부터 시작)