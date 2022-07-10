'use strict';

// 1. 동기와 비동기
// JavaScript is synchronous.
// Execute the code block in order after hoisting. (호이스팅된 이후부터 코드가 우리가 작성한(나타나는) 순서에 맞춰서 하나하나씩 동기적으로 실행된다는 뜻!)
// hoisting: var, function declaration (변수 또는 함수 선언들이 자동적으로 제일 위로 올라가는 것.)

// synchronous: 정해진 순서에 맞게 코드가 실행되는 것
// asynchronous: 비동기적으로, 언제 코드가 실행될지 예측할 수 없는 것 -> ex. setTimeout
console.log('1');
setTimeout(function() {
  console.log('2')
}, 1000) // 브라우저에서 제공하는 API, 지정한 시간이 지나면 전달한 콜백함수를 호출(브라우저야 1초뒤에 전달해준 콜백을 실행해줘~라고 요청)
// 콜백함수: 우리가 전달해준 함수를 나중에 불러줘~의 개념
console.log('3');

/* arrow function
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');
*/

// Synchronous callback
function printImmediately(print) { // print라는 콜백함수를 전달받음
  print();
} // 함수 선언은 hoisting이 된다고 했으므로, 제일 위로 올라감
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
} // 함수 선언은 hoisting으로 제일 위로 올라감
printWithDelay(() => console.log('async callback'), 2000);

/*
JS 엔진은 이렇게 이해할 것이다
선언된 함수들은 hoisting되어 위로 올라오고 이런 순서로 실행될 것이다

// Synchronous callback
function printImmediately(print) {
  print();
}

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

console.log('1'); 동기
setTimeout(() => console.log('2'), 1000); 비동기
console.log('3'); 동기
printImmediately(() => console.log('hello')); 동기
printWithDelay(() => console.log('async callback'), 2000); 비동기

1
3
hello
2
async callback

*/


// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin'});
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

/* 
1. 사용자에게 id와 password를 입력받아온다
2. 이를 이용해서 서버에게 로그인한다
3. 로그인 성공적이라면 로그인한 사용자의 id를 받아와서, 이를 이용해 role을 요청한다
4. 역할을 요청해서 성공적으로 받아와 진다면 이름과 역할이 들어있는 object를 받아서 출력한다
*/

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id, 
  password, 
  user => {
    userStorage.getRoles(
      user, 
      userWithRole => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
      }, 
      error => {
        console.log(error);
      }
    );
  }, 
  error => {
    console.log(error)
  }
);

// Callback 지옥
/* 
- 가독성 떨어짐
- 비즈니스 로직 한눈에 이해하기 어려움
- 체인이 길어질수록 디버깅, 유지보수 어려워짐
*/