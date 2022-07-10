// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// primitive type은 변수 하나당 값을 하나만 담을 수 있다
/* 
const name = 'ellie';
const age = 4;
print(name, age);

출력하고 싶은 함수를 만든다면
-> 만약 인자가 더 많아진다면 추가할게 굉장히 많아진다
-> 관리도 힘들고 logical하게 그룹으로 묶어서 생각할 수 없어 힘들다
function print(name, age) {
  console.log(name);
  console.log(age);
}
*/

// 1. Literals and properties
const obj1 = {}; // 'object literal; syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

// -> 이를 개선하기 위해 object를 쓴다!!
const ellie = { name: 'ellie', age: 4 }; // object로 관리
print(ellie);

// Runtime: 프로그램이 동작하고 있을때
// JS: 동적으로 type 이 runtime 때 결정되는 언어
// 뒤늦게 property 추가 가능하다

// with JavaScript magic (dynamically typed language)
// can add properties later
ellie.hasJob = true;
console.log(ellie.hasJob); // true

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob); // undefined


// 2. Computed properties
// key should be always string
console.log(ellie.name); // object안에 있는 데이터 접근할 때 .property -> 코딩하는 그 순간 그 키에 해당하는 값을 받아오고 싶을 때 (코딩할 땐 이 경우가 맞다)
console.log(ellie['name']); // object안에 있는 변수의 이름을 string 형태로 접근 가능 computed properties -> 정확하게 어떤 key가 필요한지 모를때, runtime에서 결정될 때 쓴다 / 실시간으로 원하는 key의 값을 받아오고 싶을때

ellie['hasJob'] = true;
console.log(ellie.hasJob);

// 예시) obj와 key를 받아서, obj에 있는 key에 상응하는 value를 출력하는 함수 
// -> 언제 어떤 key를 받을지 모른다
// 예를 들어 원하는 key를 사용자에게 input을 받아서 출력하는 함수라면 key는 어떤걸 출력할지 코딩하는 시점에는 모른다!
function printValue(obj, key) {
  console.log(obj.key); // obj에 key라는 property는 들어있지 않다
}

printValue(ellie, 'name'); // undefined

// 이럴땐 computed properties 쓴다
function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(ellie, 'name'); // ellie
printValue(ellie, 'age'); // 4
// 나중에 동적으로 key에 관련된 value를 받아와야 할때 유용하게 쓰일 수 있다!


// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
// const persont4 = {name: '' ...}; 네번째 사람 만들려면 이름과 나이.. 일일이 작성해야 하는 번거로움 -> 어떻게 편하게 만들 수 있을까? 
// const person4 = makePerson('ellie', 30);
const person4 = new Person('ellie', 30);
console.log(person4);

// function makePerson(name, age) {
//   return {
//     name: name,
//     age: age,
//   };
// }

// key와 value의 이름이 동일하다면 생략 가능하다
// function makePerson(name, age) {
//   return {
//     name,
//     age,
//   };
// }

/* 우리가 해결하려는 문제점은? object를 필요할 때 일일이 만들게 되면
불가피하게 동일한 key와 value들을 반복해서 작성해야 하는 문제점
그래서 함수를 이용해서 값만 전달해주면 object를 만드는 함수(makePerson)를 만들 수 있다.
makePerson은 class, 템플릿 같은 아이!
*/

// 4. Constructor function
function Person(name, age) {
  // this = {}; -> 여기서 생략된 것은 새로운 object를 만들어서 this에 name이라는 새로운 property를 넣고
  this.name = name;
  this.age = age;
  // return this; -> 결국은 이 this를 리턴하는 함수
}

/* 다른 계산하지 않고 순수하게 object 생성하는 함수들 
-> 보통 대문자로 시작하도록 함수들을 만들고, return 값대신 this.name = name; 식으로 클래스에서 constructor에서 했던 것처럼 작성
호출할때도 new Person('ellie', 30) 처럼 클래스에서 object 만드는 것처럼
이렇게 하면 JS 엔진이 알아서 object를 생성해준다
*/

// 5. in operator: property existence check (key in obj)
// 해당하는 key가 obj 안에 있는지 확인
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie); // false
console.log(ellie.random); // undefined -> 정의하지 않은 key에 접근했을 때


// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in ellie) { // ellie가 가지고 있는 key들이 블럭을 돌때마다 key라는 지역변수에 할당됨
  console.log(key);
}


// for (value of iterable)
const array = [1, 2, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

for (value of array) { // array에 있는 모든 값들이 value에 할당되면서 블럭 안에서 순차적으로 출력하거나 값을 계산할 수 있다
  console.log(value);
}


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
/*
user라는 변수는 메모리를 가리키고 있고, 메모리에는 ref 가 들어있고,
ref는 { name: 'ellie', age: '20'} 오브젝트를 가리키고 있다
user2의 변수는 user가 할당이 되어졌으므로, user2에도 동일한 ref가 할당된다
동일한 ref 도 똑같은 ellie 오브젝트를 가리키고 있다
만약 user2의 name을 coder로 바꾸면?
*/
user2.name = 'coder';
console.log(user.name); // coder


// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// assign(복사하고자하는 target, 복사를 하려하는 source)
const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);


// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);

