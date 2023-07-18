// 표준 html attribute는 js property 변환됨.
console.log(document.body.id);
console.log(document.body.something);

// 비표준(사용자정의, customized) html attribute
// getAttribute("속성명")
console.log(
  document.body.getAttribute("something")
);
// 사용자 정의 속성 추가(변경)
document.body.setAttribute("option", "special");

// 속성 목록 조회
const arr = Array.from(
  document.body.attributes
).map((attr) => `${attr.name}='${attr.value}'`);
console.log(arr);

// 비표준 속성, data-속성명
const items = document.querySelectorAll("li");
for (let item of items) {
  // js에서는 dataset.속성명 접근 가능함
  console.log(item.dataset.sno);

  // 데이터 속성 추가 및 변경
  // <li .. data-major="full-stack"> ... </li>
  setTimeout(() => {
    item.dataset.major = "full-stack";
  }, 1000);
}
