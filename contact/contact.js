// 데이터 조회 및 목록 생성
(async () => {
  const response = await fetch(
    "http://localhost:8080/contacts"
  );
  // 결과가 배열
  const result = await response.json();
  console.log(result);

  const tbody = document.querySelector("tbody");

  // 배열 반복을 해서 tr만든다음에 tbody 가장 마지막 자식에 추가
  for (let item of result) {
    const template = /*html*/ `
    <tr data-email="${item.email}">
      <td>${item.name}</td>
      <td>${item.phone}</td>
      <td>${item.email}</td>
    </tr>`;
    tbody.insertAdjacentHTML(
      "afterbegin",
      template
    );
  }
})();

// 추가폼 처리
(() => {
  const form = document.forms[0];
  const inputs = form.querySelectorAll("input");

  const name = inputs[0];
  const phone = inputs[1];
  const email = inputs[2];

  const add = form.querySelector("button");

  add.addEventListener("click", (e) => {
    e.preventDefault();

    if (name.value === "") {
      alert("이름을 입력해주세요.");
      return;
    }

    if (phone.value === "") {
      alert("전화번호를 입력해주세요.");
      return;
    }

    const tbody = document.querySelector("tbody");
    const tr = document.createElement("tr");
    // 삭제할 때 사용하려고 데이터 속성을 추가함
    tr.dataset.email = email.value;

    tr.innerHTML = `
    <td>
      ${name.value}
    </td>
    <td>
      ${phone.value}
    </td>
    <td>
      ${email.value}
    </td>`;

    tbody.prepend(tr);
    form.reset();
  });

  console.log("추가폼 처리 코드");
})();

// 삭제폼 처리
(() => {
  const form = document.forms[1];

  const email = form.querySelector("input");
  const del = form.querySelector("button");

  del.addEventListener("click", (e) => {
    e.preventDefault();
    const tr = document.querySelector(
      `tr[data-email="${email.value}"]`
    );

    if (!tr) {
      alert("해당 이메일의 연락처 없습니다.");
      return;
    }

    tr.remove();

    form.reset();
  });
})();
