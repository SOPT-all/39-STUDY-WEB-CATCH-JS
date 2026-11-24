## Q1. 빈칸 채우기

객체는 키와 값으로 이루어진 **( A )** 의 집합이다.
**( A )** 의 값이 함수일 경우, 일반 함수와 구분하기 위해 **( B )** 라고 부른다.
객체에서 프로퍼티를 찾을 때 해당 객체에 프로퍼티가 없다면, 자바스크립트 엔진은 **( C )** 를 따라 상위 프로토타입의 프로퍼티를 차례대로 검색한다.

---

## Q2. O/X

> 1. 객체에 존재하지 않는 프로퍼티에 접근하면 에러가 발생한다.
> 2. `prototype` 프로퍼티는 모든 객체가 가지고 있다.
> 3. `hasOwnProperty`는 프로토타입에서 상속받은 프로퍼티에 대해서도 `true`를 반환한다.
> 4. 생성자 함수의 `prototype`에 추가한 메서드는 그 생성자 함수로 만든 모든 인스턴스가 공유한다.
> 5. 프로토타입 체인의 종점인 `Object.prototype`의 프로토타입은 `null`이다.

---

## Q3. 출력 예측

다음 코드의 출력 결과를 순서대로 작성해 주세요.

```js
const user = {
  name: 'Lee',
  'favorite-food': '떡볶이',
};

const key = 'name';

console.log(user.key);
console.log(user[key]);
console.log(user['favorite-food']);
console.log(user.age);
```

---

## Q4. 출력 예측

다음 코드의 출력 결과를 순서대로 작성해 주세요.

```js
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

const c1 = new Circle(1);
const c2 = new Circle(2);

console.log(c1.getArea === c2.getArea);
console.log(c1.hasOwnProperty('radius'));
console.log(c1.hasOwnProperty('getArea'));
console.log('getArea' in c1);
console.log(Object.getPrototypeOf(c1) === Circle.prototype);
```

---

## Q5. 서술형

아래 코드에서 `arr`에 `push` 메서드를 직접 추가한 적이 없는데도 정상적으로 동작합니다.
그 이유를 **프로토타입 체인**을 이용해 설명해 주세요.

```js
const arr = [];
arr.push(1);

console.log(arr); // [1]
console.log(arr.hasOwnProperty('push')); // false
```
