/*
Promise
- JS에서 제공하는 비동기를 간편하게 처리할 수 있도록 도와주는 object
- 정해진 장시간의 기능을 수행하고 나서 정상적으로 기능이 수행되었다면 성공의 메시지와 함께 처리된 결과값을 전달해주고,
- 만약 기능 수행 중 예상치 못한 문제가 발생하면 에러를 전달해준다

예시) pre-enrollment
드림코딩 아카데미에서 코스를 준비중인데 언제 코스가 완료될지 모르는 시점이다
관심있는 학생들은 이메일을 통해 미리 등록할 수 있는 시스템이 있다(Promise 생성)
A학생이 등록을 완료하게 되면(Promise에 등록), 시간이 지난 후에 코스가 오픈이 되면
A학생에게 메일로 공지가 온다. 수업 준비전 미리 등록했으므로 수업완료되자마자 공지를 받음(Promise가 성공적으로 값을 전달함)
수업이 이미 오픈된 후에 B학생이 사전 공지창을 발견해서 이메일 주소 입력하고 등록하면, 수업이 이미 오픈되었으므로
기다릴 필요가 없이 바로 B에게 공지가 오고 수업에 참여할 수 있다.(이미 성공적으로 처리된 Promise)
*/

// Promise is a JavaScript object for asynchronous operation.
// 비동기적인 것을 수행할 때 callback 함수 대신 유용하게 쓸 수 있는 object이다!

/*
1. state(상태) : 프로세스가 heavy한 operation을 수행중인지, 기능 수행이 완료가 되어서 성공했는지, 실패했는지...상태
2. procducer와 consumer의 차이
- producer : 우리가 원하는 기능을 수행해서 해당하는 데이터, 정보를 만들어내는, 제공하는 사람
- consumer : 제공된 데이터를 쓰는, 필요로하는, 소비하는 사람

State: pending -> fulfilled or rejected
- pending : promise가 만들어져서 우리가 지정한 operation이 수행중일때
- fulfilled : operation을 성공적으로 끝냈을 때(완벽하게 완료한 상태)
- rejected : 파일을 찾을 수 없거나, 네트워크에 문제가 생겼을 때
Producer vs Consumer
*/


// 1. Producer
// when new Promise is created, the executor runs automatically.
// (새로운 프로미스가 만들어질 땐, 우리가 전달한 executor 콜백함수가 자동적으로 바로 실행된다!! 염두에 두고 코드 작성할 것!)

// 우리가 원하는 기능을 비동기적으로 실행하는 Promise를 만들어보자
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  /* 네트워크에서 데이터를 받아오거나, 파일에서 큰 데이터를 읽어오는 과정은
  시간이 꽤 걸려서 동기적으로 처리하면 다음 라인 코드가 실행되지 않아서 
  시간이 좀 걸리는 일들은 promise만들어서 비동기적으로 처리하는 것이 좋다!*/
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('no network'));
    /* 기능을 잘 수행했어, 성공적으로 잘 해냈다면 resolve라는 콜백함수를 호출하면 된다
    데이터를 받아왔는데 사용자의 이름은 ellie었어 라고 성공적으로 네트워크에서 받아온,
    또는 파일에서 읽어온, 그리고 그것들을 가공한 데이터를 resolve라는 콜백함수를 통해 전달하면 된다! 
    이 Promise는 어떤 일을 2초 정도 무언가를 하다가, 결국엔 이를 잘 마무리해서 resolve라는 콜백함수를 호출하면서
    ellie라는 값을 전달해주는 promise이다.
    
    만약 네트워크를 하다가 무언가 실패했다고 해보자. reject를 호출할 건데, 
    reject는 보통 Error라는 object를 통해 값을 전달한다. Error라는 클래스는 JS에서 제공하는
    object 중의 하나로, 무언가 에러가 발생했다는 걸 나타내는 object다.
    Error object에는 어떤 에러가 발생했는지 이유를 잘 명시해서 작성해야 한다.
    */ 
  }, 2000);
  // promise 안에서 네트워크 통신을 하는 것처럼 setTimeout을 이용해 시간의 delay를 줘보자
}) ;
/* promise는 class이므로 new라는 키워드를 이용해서 object를 생성할 수 있다
promise 생성자보면 executor라는 콜백함수를 전달해주어야 한다
콜백함수에는 또다른 2가지 콜백함수를 받는다 
- resolve(기능을 정상적으로 수행해서 마지막에 최종데이터를 전달하는 콜백함수)
- reject(기능 수행중 문제가 생기면 호출하게 될 콜백함수)
*/

/* 
promise를 만드는 순간 우리가 전달한 executor라는 콜백함수가 바로 실행된다.
만약 promise안에 network 통신하는 코드를 작성했다면 promise가 만들어지는 순간
바로 네트워크 통신을 수행하게 된다.
1. 만약, 네트워크 요청을 사용자가 요구했을 때만 해야하는 경우라면 즉 사용자가 버튼을 눌렀을 때
네트워크 요청을 해야하는 경우라면, 이런 식으로 작성하면 사용자가 요구하지도 않았는데
불필요한 네트워크 통신이 일어날 수 있다.
그래서 promise를 만드는 순간 그 안에 전달한 executor 콜백함수가 바로 실행되므로 이 점을 유의해야 한다!
불필요한 네트워크 통신을 하게 될 수 있으므로 유의하자!
*/


// Promise 사용하기
// 2. Comsumers: then, catch, finally

// then: promise가 정상적으로 잘 수행된다면, 값을 받아와서 우리가 원하는 기능을 수행하는 콜백함수를 전달해준다
// value 파라미터: promise가 잘 수행되어서 마지막으로 resolve 콜백함수에서 전달된 ellie라는 값이 전달된다 
promise
  .then((value) => {
    console.log(value) // 2초 후 ellie 출력
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => { 
    console.log('finally');
  })

  
  // 3. Promise chaining
  const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
  })

  fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then(num => console.log(num));

  // then은 값을 바로 전달할 수도 있고, 아니면 (또 다른 비동기인) promise를 전달해도 된다!
  

// 4. Error Handling 오류를 잘 처리하자
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐔'), 1000); // 1초 후 닭을 리턴
  });

const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000); // hen을 받아서 닭으로부터 달걀을 얻어오는 promise를 리턴
  });

const chick = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🐤`), 1000); // 달걀을 받아와서 병아리가 나오는 함수
  });

  /*
  getHen()
  .then(hen => getEgg(hen))
  .then(egg => chick(egg))
  .then(bird => console.log(bird));

  코드를 다음과 같이 좀 더 깔끔하게 바꿀 수 있다!
  콜백함수를 전달할때 받아오는 value를 다른 함수로 바로 하나를 호출하는 경우에는
  생략이 가능하다. 한가지만 
  */

  getHen()
    .then(getEgg) // 자동적으로 then에서 받아오는 value를 바로 getEgg라는 함수에 암묵적으로 전달해서 호출해준다
    .catch(error => {
      return '🥖';
    }) // getEgg는 실패했지만 빵을 대신 전달해주었기 때문에 promise chain이 실패하지 않고 마지막까지 완성됨 -> 그래서 여기서 발생한 에러를 처리하고 싶을 땐 바로 다음에 catch 작성해서 문제 해결!
    .then(chick)
    .then(console.log)
    .catch(console.log);


// 5. callback hell -> promise 이용해 작성해보자
// callback-to-promise 파일에서~!