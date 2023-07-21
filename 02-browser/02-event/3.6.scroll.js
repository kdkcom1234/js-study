let count = 3;
window.addEventListener("scroll", (e) => {
  // 문서의 전체 높이
  console.log(document.body.clientHeight);
  // window.scrollY : 스크롤된 Y축 크기
  // window.innerHeight : 브라우저의 뷰포트 높이(1페이지 풀사이즈 높이)

  document.querySelector("div").innerHTML =
    document.body.clientHeight -
    (window.scrollY + window.innerHeight);

  const offset =
    document.body.clientHeight -
    (window.scrollY + window.innerHeight);

  if (offset < 50) {
    console.log("끝점에 가깝다.");
    // 요소 생성
    const div = document.createElement("div");
    // 속성 설정
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    div.className = "box";
    div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    div.innerHTML = ++count;
    // 어떤 요소에 append
    document.body.append(div);
  }
});
