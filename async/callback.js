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
}, 1000) // 지정한 시간이 지나면 전달한 콜백함수를 호출
console.log('2');
console.log('3');
