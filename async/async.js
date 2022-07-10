// async & await
// clear style of using promise :)

// 1. async

/*
function fetchUser() {
  return new Promise((resolve, reject) => { // 이 promise라는 object를 가지고 있으면 여기에 네가 then이라는 콜백함수만 등록해놓으면 user의 data가 준비되는 대로 네가 준비한 콜백함수를 불러줄께!
    // do network request in 10 secs...
    resolve('ellie'); // promise안에는 resolve나 reject를 이용해서 완료를 해줘야 한다.
  })
}

const user = fetchUser(); // fetchUser는 promise를 return함
user.then(console.log);
console.log(user);

만약 비동기적 처리를 아예 안한다면 사용자 데이터를 받아오는데 10초가 걸리므로 
만약 뒤에서 웹페이지 ui를 표시하는 기능을 수행하는 코드가 있다면,
이것이 끝나는 동안 데이터가 웹페이지에 표시되지 않으므로 사용자는 10초정도 텅텅 빈 웹페이지를 보게된다.
따라서 오래 걸리는 일들은 비동기적으로 처리할 수 있게 해줘야 한다.

promise 이용하지 않고도 비동기로 간편하게 작성할 수 있는 방법이 있다
function 앞에 async 키워드를 붙여준다 -> 자동으로 함수안의 코드 블럭들이 promise로 변환된다
키워드를 이용하면 promise로 바로 만들 수 있다!
*/ 

async function fetchUser() {
  // do network request in 10 secs....
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);


// 2. await ✨
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  // throw 'error';
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

/*
await : async가 붙은 함수 안에서만 쓸 수 있다
delay 함수는 Promise를 리턴하는데 정해진 ms가 지나면 resolve를 호출하는 promise를 리턴한다
3초를 전달했으므로 3초가 지나면 resolve를 호출하는 promise가 전달도니다
await 키워드 쓰게 되면 delay가 끝날때까지 기다려준다!
3초 있다가 사과 리턴하는 promise가 만들어진다. async 키워드 있으므로.
바나나도 3초 있다가 바나나를 리턴한다.

이를 promise를 쓰는 함수로 만들어보자면..

function getBanana() {
  return delay(3000)
  .then(() => '🍌');
}

chaining 하는 것보다 동기적인 코드로 쓰는 것처럼 하면 더 쉽게 이해할 수 있다!
delay가 끝날 때까지 기다렸다가 바나나를 리턴한다. 이렇게!
*/

// promise도 중첩하게 되면 콜백지옥과 비슷한 문제점이 발생한다
/*
function pickFruits() {
  return getApple()
  .then(apple => {
    return getBanana()
    .then(banana => `${apple} + ${banana}`);
  });
}

pickFruits().then(console.log);
*/

// 그래서 async 키워드 이용해서 간단하게 만들 수 있다
async function pickFruits() {
  const applePromise = getApple(); // promise를 만드는 순간 바로 promise안에 들어있는 코드 블럭이 실행된다고 했다
  const bananaPromise = getBanana();
  const apple = await applePromise; // 동기화를 시켜준다
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);


// 4. await 병렬 처리
/* 사과를 받는데 1초가 소요되고, 바나나 받는데 1초가 소요되는데, 이렇게 순차적으로 실행하면 비효율적이다
이 둘은 서로 연관이 없으므로 서로 기다릴 필요가 없다. */


// 5. 유용한 Promise
// api 이용하면 아주 간단하게 만들 수 있따
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]) // promise 배열 전달하게 되면 모든 promise들이 병렬적으로 다 받을 때까지 모아주는 아이
  .then(fruits => fruits.join(' + ')); // 다 받아진 배열이 다시 전달된다
}
pickAllFruits().then(console.log);


function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);