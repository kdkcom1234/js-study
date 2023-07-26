// post 목록 화면을 제작 post.html, post.js
// fetch api를 사용하여 http://localhost:8080/posts 주소를 호출한 후

// 배열 목록을 div(카드) 목록으로 표시한다.

//    -----------------              |
//    | 게시자                        |
//    | -------------                |
//    | 1제목(h3)                    |
//    | 본문(p)                      |
//    |  .....                       |
//    |  .....                       |
//    | -------------                |
//    | new Date(생성시간).toString() |
//    -----------------
//
//    -----------------
//    | 게시자         |
//    | ------------- |
//    | 2제목(h3)       |
//    | 본문(p)        |
//    |  .....        |
//    |  .....        |
//    | ------------- |
//    | 생성시간       |
//    -----------------

(async () => {
  const body = document.body;
  const url = "http://localhost:8080/posts";

  // 1. fetch, 서버에서 데이터 가져오기
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);

  // 배열 메서드를 사용하기 위해서...
  const data = Array.from(result);
  console.log(data);

  // 2.-- 데이터배열 반복문으로 html문자열 만들고,
  // 컨테이너에 추가
  data.forEach((item) => {
    const template = /*html*/ `
      <div style="width:300px; margin-bottom:2rem;" data-no="${
        item.no
      }">
        <em>${item.creatorName}</em>
        <hr>
        <h3>${item.title}</h3>
        <p>${item.content}</p>
        <hr>
        <small>${new Date(
          item.createdTime
        ).toLocaleString()}</small>
      </div>
    `;

    body.insertAdjacentHTML(
      "beforeend",
      template
    );
  });
})();
