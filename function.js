// Function
// - fundamental building block in the program (프로그램을 구성하는 굉장히 기본적인 building block)
// - subprogram can be used mutiple times (subprogram이라고도 불리며 여러번 재사용 가능)
// - performs a task or calculates a value (한가지의 task나 어떠한 값을 계산하기 위해 쓰임)

// 1. Function declaration
/*
정의하는 방법 function name(param1, param2) { body... return; }
one function === one thing (하나의 함수는 한 가지의 일만 하도록 만들어야 함)
naming: doSomething, command, verb
e.g. createCardAndPoint -> createCard, createPoint
function is object in JS -> 따라서, function을 변수에 할당하거나, parameter로 전달하거나, 함수를 리턴할 수도 있다
*/
function printHello() {
  console.log('Hello');
}
printHello(); // Hello

function log(message) {
  console.log(message);
}
log('Hello@'); // Hello@
log(1234); // 1234


// 2. Parameters
// premitive parameters: pased by value (메모리에 value가 그대로 저장되어 있기 때문에 value가 전달됨)
// object parameters: passed by reference (메모리에 reference가 저장되어 있으므로 reference가 전달됨)
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' }; // object가 만들어진 reference가 메모리에 들어가고, reference는 object를 메모리 어딘가에 가리키고 있다.
changeName(ellie); // ellie가 가리키고 있는 곳의 이름을 coder로 변경하게 됨
console.log(ellie); // {name: 'coder'}
// object는 reference로 전달되므로 함수 안에서 obj의 값을 변경하게 되면 변경된 사항이 그대로 메모리에 적용되므로 추후에 변경 사항 확인 가능


// 3. Default parameters (added in ES6) 디폴트값 지정 가능
function showMessage(message, from = 'unknown') {
  // if (from === undefined) {
  //   from = 'unknown';
  // }
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');


// 4. Rest parameters (added in ES6)
// 배열 형태로 전달된다
function printAll(...args) { // args는 3개의 값이 담겨있는 배열
  // for loop
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  // for of
  for (const arg of args) {
    console.log(arg);
  }
  // forEach
  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie'); // 인자를 3개 전달


// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
// 자식은 부모에게 정의된 메시지 확인 가능하지만,
// 자식안에 정의된 메시지를 부모, 상위에서 보려하면 에러 발생!
// 중첩된 함수에서 자식의 함수가 부모함수에 정의된 변수들에 접근 가능한 것 -> 클로져?
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);

  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage); // error
  // return undefined; (return type이 없는 함수들은 return undefined가 들어가있는것과 같다 생략가능)
}
printMessage();


// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);
// return이 없는 함수들은 return undefined;가 들어가 있는 것과 똑같다.


// 7. Early return, early exit
// 블럭 안에서 로직을 작성하면 가독성이 많이 떨어진다
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good -> 조건이 맞지 않을땐 빨리 return해서 함수 종료
// 조건이 맞을 때만 필요한 로직 실행하는 것이 더 좋다!
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}


// Function Expression

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
// print(); // error
const print = function () { // anonymous function(함수에 이름이 없는 것) // 함수를 선언함과 동시에 print에 할당하고 있다
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// function expression 은 할당된 다음부터 호출이 가능한 반면(즉, 선언하기전 호출하면 에러),
// function declaration은 hoisting이 된다 (선언되기 이전에 호출 가능 ->
// JS 엔진이 선언된 것을 제일 위로 올려주기 때문이다)


// 2. Callback function using function expression
// 함수를 전달해서 상황에 맞으면, 원하면 전달된 함수를 부르도록 전달하는 것을 callback function이라 함
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
// 디버깅할 때 함수이름이 나오도록 함
// 함수 안에서 자신 스스로를 또 호출할때
const printNo = function print() {
  console.log('no!');
  // print(); -> recursions
};
randomQuiz('wrong', printYes, printNo); // no!
randomQuiz('love you', printYes, printNo); // yes!


// Arrow function
// always anonymous
const simplePrint = function () {
  console.log('simplePrint!');
}

const simplePrint2 = () =>  console.log('simplePrint2!');


const add = function (a, b) {
  return a + b;
}

const add2 = (a, b) => a + b;

// 함수형 프로그래밍 -> 배열, 리스트 에서 더욱 빛을 발휘할 것이다!

// 한 줄인 경우에는 블럭 없이 작성이 가능하지만
// 함수 안에서 다양한 일들 필요해서 블럭이 필요하다면 이런 식으로 블럭을 넣어서 처리! (return도 써야한다)
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};


// IIFE: Immediately Invoked Function Expression
// 함수를 선언하면 나중에 따로 호출해야 하는데,
function hello() {
  console.log('IIFE');
}
hello(); // IIFE

// 선언함과 동시에 호출하려면 함수의 선언을 괄호로 묶은 다음에,
// 함수를 호출하듯이 (); 해주면 바로 함수가 호출된다!
(function hello() {
  console.log('IIFE');
})(); // IIFE


// Fun quiz time!
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a+b;
    case 'substract':
      return a-b;
    case 'divide':
      return a/b;
    case 'multiply':
      return a*b;
    case 'remainder':
      return a%b;
    default:
      throw Error('unknown command'); // 정해진 command가 아닌 경우
  }
}
console.log(calculate('add', 2, 3));

// 정해진 data를 처리하는 경우 if문보다 switch문으로 만드는 것이 좋다!
