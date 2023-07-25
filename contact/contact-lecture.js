// 추가폼
(() => {
  const form = document.forms[0];
  const inputs = form.querySelectorAll("input");

  const name = inputs[0];
  const phone = inputs[1];
  const email = inputs[2];

  const add = form.querySelector("button");
  // 수정 삭제 버튼
  const buttons = form.querySelectorAll("button");
  const modify = buttons[1];
  const cancel = buttons[2];

  // 선택된 행 값을 저장
  let selectedRow = 0;

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
    tr.dataset.name = name.value;

    /* 수정 기능 추가된 내용 ----- 시작 */

    // tr을 클릭하면 발생하는 이벤트 등록
    tr.addEventListener("click", (e) => {
      add.hidden = true; // 추가버튼 숨김
      modify.hidden = false;
      cancel.hidden = false;

      // 테이블 셀의 컨텐트를 입력박스에 수정할 값으로 넣어줌
      name.value =
        tr.children[0].textContent.trim();
      phone.value =
        tr.children[1].textContent.trim();
      email.value =
        tr.children[2].textContent.trim();

      // 선택된 행번호를 저장
      selectedRow = tr.rowIndex;
      console.log(tr.rowIndex);
    });

    /* 수정 기능 추가된 내용 ----- 끝*/

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

  // 수정 버튼 클릭 시에 작동
  modify.addEventListener("click", (e) => {
    e.preventDefault();

    console.log(selectedRow);
    const tr =
      document.querySelectorAll("tr")[
        selectedRow
      ];
    tr.dataset.name = name.value;

    const cells = tr.querySelectorAll("td");
    cells[0].textContent = name.value;
    cells[1].textContent = phone.value;
    cells[2].textContent = email.value;
    form.reset();

    add.hidden = false;
    modify.hidden = true;
    cancel.hidden = true;
  });

  cancel.addEventListener("click", (e) => {
    e.preventDefault();
    form.reset();

    add.hidden = false;
    modify.hidden = true;
    cancel.hidden = true;
  });
})();

// 삭제폼
(() => {
  const form = document.forms[1];

  const name = form.querySelector("input");
  const del = form.querySelector("button");

  del.addEventListener("click", (e) => {
    e.preventDefault();
    const tr = document.querySelector(
      `tr[data-name="${name.value}"]`
    );

    if (!tr) {
      alert("해당 이름의 연락처 없습니다.");
      return;
    }

    tr.remove();

    form.reset();
  });
})();
