const rows =
  document.querySelectorAll("tbody > tr");

// sort를 쓸려면 배열로 변환.
const sortedRows = Array.from(
  document.querySelectorAll("tbody > tr")
).sort((a, b) =>
  a.children[0].textContent.localeCompare(
    b.children[0].textContent
  )
);

for (let row of sortedRows) {
  document.querySelector("tbody").append(row);
}

let container =
  document.getElementById("container");
let data = {
  Fish: {
    trout: {},
    salmon: {},
  },

  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

createTree(container, data);

// createTree: 객체를 받아서 속성목록으로 li를 만듦
//  -> ul에 li들을 붙이고 ul을 container에 붙여함
// container: 트리(ul > li, li ...)를 만들어 붙여넣을 요소
// data: 객체 속성 목록으로 ul, li, li..를 만들 값
function createTree(container, data) {
  // 재귀호출(recursive call): 본인함수 다시 호출
  // **재귀호출로 문제를 해결할 때 가장 중요한 포인트, 탈출 구문

  // 객체에 속성이 있으면 처리함, 없으면 X(더이상 재귀호출 안함)
  if (Object.keys(data).length > 0) {
    // ul을 만들고
    const ul = document.createElement("ul");

    // 속성 개수만큼 li들을 만듦
    // ul에 붙이고
    for (let prop in data) {
      const li = document.createElement("li"); // li만듦
      li.textContent = prop; // li 컨텐트로 속성명을 넣어줘야함
      ul.append(li);
      // 속성 객체에 대한 createTree 다시 호출
      // 컨테이너를 멀로 할거냐.., 하위 트리는 컨테이너 li구나..

      // **어떤 시점에 재귀호출을 할것인가
      // **재귀호출은 가장 나중에 호출된 함수부터 처리가된다
      createTree(li, data[prop]);
    }

    // ul을 container에 붙임
    container.append(ul);
  }
}
