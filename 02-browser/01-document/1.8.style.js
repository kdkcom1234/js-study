// 클래스 전체를 문자열로 조회
console.log(document.body.className);
// 클래스 목록을 조회
console.log(document.body.classList);

// 클래스 추가
document.body.classList.add("article");
console.log(document.body.className);
// 클래스 존재여부(true/false)
console.log(
  document.body.classList.contains("article")
);

// 클래스 제거
document.body.classList.remove("article");
console.log(document.body.className);

// 클래스 토글
if (document.body.classList.contains("article")) {
  document.body.classList.remove("article");
} else {
  document.body.classList.add("article");
}
console.log(document.body.className);

document.body.classList.toggle("article");
console.log(document.body.className);

// background-color  => elem.style.backgroundColor
// z-index           => elem.style.zIndex
// border-left-width => elem.style.borderLeftWidth

document.body.style.display = "none";

// setTimeout 코드가 멈추게 아니고
// 특정 시간후에 함수가 실행
setTimeout(
  () => (document.body.style.display = ""),
  1000
);

document.body.setAttribute(
  "style",
  "color:red; background-color:yellow"
);
