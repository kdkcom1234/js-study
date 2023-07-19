// 알림 생성
let count = 1;

setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: `<strong>Hello!</strong><data>${count}</data>`,
    className: "welcome",
  });
  count++;
}, 1800);

// 함수 선언
function showNotification({
  top,
  right,
  html,
  className = "",
}) {
  // console.log(top, right, html, className);

  // notification box를 생성
  const box = document.createElement("div");
  // box 속성을 설정
  box.className = `notification ${className}`;
  // 기본 스타일 속성은 css
  // 박스마다 다른 속성은 style
  box.style.top = `${top}px`;
  box.style.right = `${right}px`;
  box.innerHTML = html;

  // 일단 body 앞쪽에 붙임
  document.body.append(box);

  // 1.5초후에 없어져
  setTimeout(() => {
    // node.remove();
    box.remove();
  }, 1500);
}
