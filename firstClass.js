// Node.js에는 JS 엔진이 있어서 브라우저 없이도 JS를 실행할 수 있다
// ($ node main.js)

console.log('Hello world');

// HTML과 main.js를 연결해서 여기서부터 개발해나가자
// open with live server 하면 브라우저에서 바로 확인이 된다

/*
node.js를 이용해서도 콘솔창에 출력되는 것을 볼 수 있고, 
브라우저 콘솔에도 출력되는걸 볼 수 있다.
node.js와 web API 둘 다 콘솔에 관련된 API 가 있는 것이며
그리고 API 들의 인터페이스가 둘다 동일하다.
*/

/*
Web API -> 브라우저가 제공하는, 브라우저가 이해할 수 있는 함수들
console -> 언어 자체에 포함된 건 아니지만, 통상적으로 많이 쓰이는 것
*/

// 브라우저의 개발툴 잘 활용하자!
// develper.mozilla.org 에서 JS 배우기!


// async vs defer

// html에서 JS 포함할 때 어떻게 포함하는 것이 더 효율적일까?

/* 
1. head 안에 script 포함
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="main.js"></script>
  </head>
  <body></body>
</html>

사용자가 html 파일 다운로드 받았을 때 
브라우저가 한줄 한줄씩 분석함(parsing HTML) 
-> css와 병합해서 DOM 요소로 변환

html을 쭉 parsing 하다가 script 태그를 만나면
'main.js'를 다운 받아야되네? 라고 이해하게 됨
그래서 html을 파싱하는 것을 잠깐 멈추고 
필요한 JS 파일을 서버에서 다운 받아서 실행한 다음에, 다시 파싱하는 부분으로 넘어감

단점 : 만약 js 파일의 사이즈가 엄청 크고, 인터넷이 느리면 사용자들이 웹사이트 보는데 시간소요 김! 
parsing HTML -> blocked (fetching js / executing js) -> parsing HTML (page is ready)
*/

/* 
2. body 안 제일 끝 부분에 script 추가

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
  </head>
  <body>
    <div></div>
    <script src="main.js"></script>
  </body>
</html>

이렇게 하게되면 브라우저가 HTML을 다운 받아서 쭉 파싱해서,
페이지가 준비가 된 다음에 그다음에 script를 만나서
스크립트를 fetching 서버에서 받아오고 실행하게 된다
그래서 페이지가 사용자들에게 js를 받기 전에도 이미 준비가 되어서
사용자가 페이지의 컨텐츠를 볼 수가 있다.
 
단점 : 사용자가 기본적인 html 컨텐츠를 빨리 보는 장점이 있지만,
만약 우리의 웹사이트가 자바스크립트에 굉장히 의존적이라면,
즉 사용자가 의미있는 컨텐츠를 보기 위해서는 js를 이용해서 서버에 있는 데이터를 받아온다던지
dom 요소를 더 예쁘게 꾸며준다던지 그런 식으로 동작하는 웹사이트라면
사용자가 정상적인 페이지를 보기 전까지는 fetching 서버에서 js를 받아오는 시간도 기다려야 하고, 
실행하는 시간도 기다려야 하는 큰 단점이 있음

parsing HTML -> (page is ready) fetching js -> executing js
*/

/*
3. head + async => head 안에 script를 이용하되 async 라는 속성값을 쓰는 것
async는 boolean 타입의 속성값이기 때문에 선언하는 것만으로도 true로 설정되어 사용할 수 있음

브라우저가 html을 다운로드 받아서 파싱을 하다가
'어 async가 있네, 그러면 병렬로 main.js 파일을 다운로드 받자'고 명령만 해놓고
다시 파싱을 하다가 main.js가 다운로드가 완료가 되면 그때 파싱하는 것을 멈추고 
다운로드된 js 파일을 실행하게 된다. 이렇게 실행을 다하고나서 나머지 html을 파싱하게 된다.

장점: body 끝에 사용하는 것보다는 fetching이 파싱하는 동안 병렬적으로 일어나므로 다운로드 받는 시간 절약할 수 있음
단점: js가 html이 파싱 되기 전에 실행되므로 만약 js 파일에서 querySelector를 이용해서 dom요소를 조작한다하면
조작하려는 시점에 html이, 우리가 원하는 요소가 아직 정의되있지 않을 수 있음.
또한 html을 파싱하는 동안에 언제든지 js를 실행하기 위해서 멈출 수 있기 때문에 사용자가 페이지를 보는데 여전히 시간이 걸릴 수 있음

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script async src="main.js"></script>
  </head>
  <body>
    <div></div>
  </body>
</html>

parsing HTML & (fetching js) -> (blocked) executing js -> parsing HTML (page is ready) 
*/

/*
4. head + defer => 똑같이 head 안에 script 를 쓰고, defer 옵션을 정의
파싱을 하다가 어 script defer가 있네, 그러면 main.js 다운 받자고 명령만 시켜놓고
나머지 html을 끝까지 파싱하게 된다.
그리고 마지막에 파싱이 끝난 다음에 다운로드되어진 js를 실행하게 된다

가장 좋은 옵션!
html을 파싱하는 동안 필요한 js 파일을 다 다운로드 받아 놓고, html 파싱을 먼저 해서
사용자에게 페이지를 보여준 다음에 바로 이어서 js를 실행하기 때문이다!

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script defer src="main.js"></script>
  </head>
  <body>
    <div></div>
  </body>
</html>

parsing HTML & (fetching js) (page is ready) -> executing js
*/

/* async vs defer
head + async
async 옵션으로 다수의 script를 다운로드 받게 되면..

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script async src="a.js"></script>
    <script async src="b.js"></script>
    <script async src="c.js"></script>
  </head>
  <body>
    <div></div>
  </body>
</html>

먼저 다운로드 된 아이들을 실행하게 됨. b가 먼저 되면 b실행, 그 다음에 a면 a실행...
정의된 스크립트 순서에 상관없이 다운로드 먼저 된 애를 실행하므로,
만약 우리의 js가 순서에 의존적이라면, async 옵션을 사용하면 문제가 될 수 있다

반면, 

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script defer src="a.js"></script>
    <script defer src="b.js"></script>
    <script defer src="c.js"></script>
  </head>
  <body>
    <div></div>
  </body>
</html>

반면에 defer 옵션의 경우 파싱하는 동안 필요한 js를 다 다운로드 받아놓은 다음에
그 다음에 순서대로 실행하므로 우리가 정의한 순서가 지켜지고, 
우리가 원하는 대로 스크립트가 실행될 거란 것을 예상할 수 있다.

따라서 defer 옵션이 가장 효율적이고 안전하다
*/
