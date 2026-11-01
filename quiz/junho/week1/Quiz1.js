// Q1. OX 퀴즈

// 1. var로 선언한 변수는 if 블록 안에서 선언해도 블록 밖에서 참조할 수 있다.
// 2. let으로 선언한 변수는 호이스팅이 일어나지 않는다.
// 3. const는 내부 프로퍼티 값을 변경할 수 있다.
// 4. 자바스크립트에서 함수의 상위 스코프는 함수를 호출한 위치가 아니라 정의한 위치에 따라 결정된다.
// 5. 함수를 호출할 때 매개변수보다 인수를 적게 전달하면 에러가 발생한다.

// 정답
// 1.
// 2.
// 3.
// 4.
// 5.


// Q2. 실행 결과 예측하기
function q2() {
  var x = 'global';
  function print() {
    console.log(x);
  }
  function run() {
    var x = 'local';
    print();
  }
  run();
}
// 정답: 


// Q3. 실행 결과 예측하기
var x = 1;
function foo() {
  var x = 10;
  bar();
}
function bar() {
  console.log(x);
}
foo(); // 이때 출력되는 x의 값은?
bar(); // 이때 출력되는 x의 값은?
// 정답: foo() =   , bar() =


// Q4. testVar()와 testLet()의 결과를 각각 적어주세요.
function testVar() {
  var a = 1;
  if (true) {
    var a = 2;
  }
  console.log(a);
}

function testLet() {
  let a = 1;
  if (true) {
    let a = 2;
  }
  console.log(a);
}
// 정답: testVar() =   , testLet() = 


// Q5. 코드를 고쳐서 버튼을 클릭할 때마다 count가 1씩 증가하도록 만들어주세요.
function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    count = count + 1;
  };

  return <button onClick={handleClick}>{count}</button>;
}
// 정답: 