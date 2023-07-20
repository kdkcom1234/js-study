const div = document.querySelector("div");
const p = document.querySelector("p");

div.addEventListener("click", (event) => {
  console.log("-- div clicked --");
  // event.target: 실제로 이벤트를 발생시킨 요소
  // event.currentTarget: 이벤트 핸들러 실행시킨 요소
  console.log(event.target);
  console.log(event.currentTarget);
});

p.addEventListener("click", (e) => {
  // // 이벤트를 전파하지 않음
  // e.stopPropagation();

  console.log("-- p clicked --");
  console.log(e.target);
  console.log(e.currentTarget);
});
