const btn = document.querySelector("button");

// function sayThanks() {
//   alert("감사합니다!");

//   // 이벤트 리스너 제거
//   // ("이벤트명", 함수명)
//   btn.removeEventListener("click", sayThanks);
// }

// // 함수의 이름은 함수본체의 대리자(delegate)
// btn.addEventListener("click", sayThanks);

// 이벤트 수신기(함수) 추가
btn.addEventListener("click", (event) => {
  console.log(event);
  // console.log(event.target);
  alert("클릭-화살표");
});

// btn.addEventListener("click", function () {
//   console.log(this);
//   alert("클릭-선언식");
// });
