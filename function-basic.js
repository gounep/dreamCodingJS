// Don't give up
// 포기하지 마세요 🙌

// 1. 함수 선언 & 호출

// 함수 선언
function doSomething(add) {
  console.log(add);
  const result = add(3, 5);
  console.log(result);
}

// 2. 값을 리턴하는 함수
function add(a, b) {
  const sum = a + b;
  return sum;
}

// 함수 호출
doSomething(add);

const result = add(1, 2);
console.log(result);


// 3. 언어 공부 방법
// 콘솔에 출력해보기
// 예시 만들어보기

// 4. 함수를 인자로 전달

// 5. 선언 & 호출 복습
// 선언할 때는 어떤 값을 전달받아올 건지 인자들을 정의하고 나서 코드블럭 작성
// 선언만 하면 수행되지않고, 함수를 호출해야 수행된다.


// 6. 함수를 변수에 할당
const addFun = add;
console.log(addFun);
addFun(9, 9);