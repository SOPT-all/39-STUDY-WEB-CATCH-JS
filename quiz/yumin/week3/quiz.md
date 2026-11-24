## Q1. 빈칸 채우기


함수의 상위 스코프는 함수가 **( A )** 되는 위치에 따라 결정되지만, 일반 함수의 `this`는 함수가 **( B )** 되는 방식에 따라 결정된다.

또한 클로저가 참조하는 상위 스코프의 변수를 **( C )** 라고 한다.

<br>
<br>


---

## Q2. O/X 퀴즈

> `call()`, `apply()`, `bind()`는 함수의 `this`를 명시적으로 지정할 때 사용하는 메서드


- `call()`과 `apply()`는 인수를 전달하는 방식에 차이가 있지만, 모두 함수를 즉시 호출한다.
- `bind()` 역시 `this`를 바인딩한 후 함수를 즉시 호출한다.

<br>
<br>

---

## Q3. 코드 수정하기

객체의 메서드 내부에서 중첩 함수를 사용해 객체의 `title`에 접근하려고 해요. 하지만 아래 코드를 실행하면 `TypeError`가 발생합니다.

```js
"use strict";

const study = {
  title: "JavaScript Study",

  getTitle() {
    function printTitle() {
      return this.title;
    }

    return printTitle();
  },
};

console.log(study.getTitle());
```

`this` 바인딩을 고려하여 `"JavaScript Study"`가 정상적으로 출력되도록 코드를 수정해 주세요

<br>
<br>

---

## Q4. 클로저와 상태 관리

다음은 `count`를 증가시키는 함수를 반환하는 코드입니다.

```js
function createCounter() {
  let count = 0;

  return function () {
    return ++count;
  };
}

const counterA = createCounter();
const counterB = createCounter();

counterA(); // 1
counterA(); // 2
counterB(); // 1
```

`counterA`와 `counterB`는 동일한 `createCounter` 함수로 만들어졌는데, 서로 독립적인 `count`를 유지할 수 있는 이유는 무엇일까요?

<br>
<br>

---

## Q5. 실행 결과 예측하기

반복문을 사용해 배열에 함수를 저장했습니다. 
두 반복문의 차이: 변수를 선언할 때 `var`와 `let`을 사용했다는 점

```js
const funcs1 = [];

for (var i = 0; i < 3; i++) {
  funcs1.push(() => i);
}

const funcs2 = [];

for (let j = 0; j < 3; j++) {
  funcs2.push(() => j);
}

console.log(funcs1.map(fn => fn())); // ?
console.log(funcs2.map(fn => fn())); // ?
```

클로저와 렉시컬 환경을 고려하여 각 배열의 출력 결과를 작성해 주세요.

<br>
<br>

---

## Q6. this와 클로저 응용하기

다음은 API 요청 횟수를 기록하기 위한 예시 코드입니다. `createCounter()`를 통해 요청 횟수를 관리하는 함수를 생성한 뒤, `call()`을 사용해 다른 객체를 `this`로 전달했습니다.

```js
const api = {
  endpoint: "/users",

  createCounter() {
    let count = 0;

    return () => {
      count++;
      return `${this.endpoint}: ${count}`;
    };
  },
};

const countRequest = api.createCounter();

console.log(countRequest()); // ?
console.log(countRequest.call({ endpoint: "/posts" })); // ?
```

화살표 함수의 `this` 바인딩과 클로저의 특성을 고려하여 두 코드의 출력 결과를 순서대로 작성해 주세요.
