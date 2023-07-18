// 1. 요소 생성(createElement)
// 2. 요소의 속성 설정(properties)
// 3. 부모요소에 append/prepend

// 엘리먼트 생성
// 변수에 대입만 해놓음(메모리에만 있음.)
const alertBox = document.createElement("div");
alertBox.className = "alert";

const hiText = document.createElement("strong");
hiText.textContent = "안녕하세요!";

let count = 3;
const message = document.createTextNode(
  `중요 메시지 ${3}건을 확인하셨습니다.`
);

// 뒤쪽에: 가장 마지막 자식으로 추가함.
alertBox.append(hiText);
alertBox.append(message);

// setTimeout(() => {
//   // document.body.append(alertBox);
//   // 앞쪽에: 가장 첫번째 자식으로 추가함.
//   document.body.prepend(alertBox);
// }, 1000);

// setTimeout(() => {
//   document.body.remove(alertBox);
// }, 3000);

// 1.5에 예시코드 있음
// document.body.insertAdjacentHTML(
//   "afterbegin",
//   `<div class="alert">
// <strong>안녕하세요!</strong> 중요 메시지를
// 확인하셨습니다.
// </div>`
// );

// setTimeout(() => {
//   const alertBox =
//     document.querySelector(".alert");
//   document.body.remove(alertBox);
// }, 3000);

setTimeout(() => {
  document.write("<>자바스크립트</b>");
}, 2000);
