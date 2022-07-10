// 1. String concatenation
console.log('my' + ' cat'); // my cat
console.log('1' + 2); // 12
console.log(`string literals: 

''''
1 + 2 = ${1 + 2}`);

console.log('ellie\'s \n\tbook');


// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation


// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 앞에 있으면 바로 업데이트 되서 할당이 되고, 뒤에 있으면 할당을 해놓고 업데이트는 그 뒤에 일어남


// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;


// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater tha or equal


// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2; // false

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);
// 심플한 value를 앞에 두고, expression 이나 연산이 많은 함수를 뒤에 배치하는게 효율적!

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
// and도 heavy한 operation일수록 뒤에서 체크하는것이 좋음!

// often used to compress long if-statement
// nullableObject && nullableObject.something
/* 
&& 는 간편하게 null check 할 때도 많이 쓰인다
nullableObject가 null 이면 false가 되기 때문에 뒤에가 실행 x
-> nullObject가 null이 아닐 때만 nullableObject의 something이라는 value를 받아오게 된다!

if (nullableObject != null) {
   nullableObject.something;
}
*/

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log(':D');
  }
  return true;
} // 쓸데없이 시간을 낭비하다가 결국 true를 리턴하는 함수


// ! (not)
console.log(value1);
console.log(!value1);


// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion (type을 변경해서 검사한다)
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality (type을 신경써서, type이 다르면 다른애라고 한다)
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
/*
object는 메모리에 탑재될때 레퍼런스 형태로 저장된다
ellie1 과 2는 똑같은 데이터가 들어있는 object지만 실제로 메모리에는
1과 2에는 각각 다른 레퍼런스가 들어있고, 그 다른 레퍼런스는 서로 다른 object 를 가리키고 있다.
그리고 ellie3은 ellie1의 레퍼런스가 할당되어 있으니까 똑같은 레퍼런스를 가지고 있게 된다
*/
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;

console.log(ellie1 == ellie2); // false 각각 다른 레퍼런스가(ref1, ref2 식으로!?) 저장되어 있다 / 레퍼런스가 다르다
console.log(ellie1 === ellie2); // false 똑같은 타입이든 아니든 레퍼런스 값이 다르므로 false
console.log(ellie1 === ellie3); // true 똑같은 레퍼런스를 갖고 있다 (ellie1이 가지고 있는 reference value를 3으로 할당했기 때문에)


// equality - puzzler

// false: 0, null, undefined, NaN, ''
// true: any other value

console.log(0 == false); // true
console.log(0 === false); // false -> 0은 boolean type이 아니다
console.log('' == false); // true
console.log('' === false); // false -> ''은 boolean type이 아니다
console.log(null == undefined); // true
console.log(null === undefined); // false 


// 8. Conditional operators: if
// if, else if, else

const name = 'df';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('Your are amazing coder!');
} else {
  console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');


// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome': // 같을 때는 case를 연달아서 붙여놓으면 된다
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}


// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do wile loop, body code is executed first,
// then check the condition.
// 먼저 블럭을 실행한 다음에 조건이 맞는지 안맞는지 검사
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// 블럭을 먼저 실행하고 싶다면 do-while, 조건문이 맞을 때만 블럭을 실행하고 싶다면 while 을 쓴다!

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}
// begin을 딱 처음에 한번만 호출, 블럭 실행 전에 컨디션 맞는지 안맞는지 검사, 블럭 다 실행되면 step 실행. condition이 안맞을 때까지 실행함

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}
// 블럭 안에 let 이라는 지역 변수 선언


// nested loops -> O(n**2) 이라 cpu 에 좋지않으므로 피하는게 좋다! 
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// break : loop 를 완전히 끝내는 것
// continue : 지금껏만 skip 하고 다시 다음 스텝으로 넘어가는 것

// Q1. iterate from 0 to 10 and print only even numbers (use continue)

// my ans
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(i);
  } else {
    continue;
  }
}

// ans 1
for (let i = 0; i < 11; i++) {
  if (i % 2 != 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// ans 2
for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(`q1. ${i}`);
  }
}


// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)

// my -> break 를 사용안했네!?
let j = 0;
while (j < 9) {
  console.log(j);
  j++;
}

let k = 0;
do {
  console.log(k);
  k++;
} while (k < 9);


// ans
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2: ${i}`);
}