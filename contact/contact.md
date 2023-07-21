먼저, 이름, 전화번호, 이메일을 포함하는 연락처 관리 프로그램의 예시 화면은 다음과 같습니다:

-- 리스트 구조(ul/li)
-- 테이블 구조(table/tbody/tr/td)
-- 카드 구조(div:box)

```
-----------------------------------------------
| 연락처 관리 프로그램                         |
-----------------------------------------------
| 이름: [__________] 전화번호: [__________]   |
| 이메일: [__________] [추가 버튼]            |
-----------------------------------------------
| 저장된 연락처 리스트:                       |
|                                             |
| 1. John Doe | 010-1234-5678 | john@doe.com |
| ...                                         |
-----------------------------------------------
| 연락처 삭제:                                |
| 이름을 입력하세요: [_________]              |
| [삭제 버튼]                                |
-----------------------------------------------
```

위의 화면은 HTML로 다음과 같이 작성될 수 있습니다:

```html
<html>
  <head>
    <title>연락처 관리 프로그램</title>
  </head>
  <body>
    <h1>연락처 관리 프로그램</h1>
    <div>
      <input
        type="text"
        id="contactName"
        placeholder="이름"
      />
      <input
        type="text"
        id="contactPhone"
        placeholder="전화번호"
      />
      <input
        type="text"
        id="contactEmail"
        placeholder="이메일"
      />
      <button onClick="addContact()">추가</button>
    </div>
    <h2>저장된 연락처 리스트:</h2>
    <ul id="contactList"></ul>
    <div>
      <input
        type="text"
        id="removeContactName"
        placeholder="이름을 입력하세요"
      />
      <button onClick="removeContact()">
        삭제
      </button>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

이 HTML 코드는 다음을 포함합니다:

- 이름, 전화번호, 이메일을 입력하는 텍스트 필드와 연락처를 추가하는 버튼
- 저장된 연락처 리스트
- 연락처를 삭제하기 위한 텍스트 필드와 삭제 버튼

다음으로 JavaScript를 사용해 위의 HTML 코드에 동작을 추가하겠습니다:

```javascript
let contacts = [];

function addContact() {
  let contactName = document.getElementById(
    "contactName"
  ).value;
  let contactPhone = document.getElementById(
    "contactPhone"
  ).value;
  let contactEmail = document.getElementById(
    "contactEmail"
  ).value;

  if (
    contactName !== "" &&
    contactPhone !== "" &&
    contactEmail !== ""
  ) {
    contacts.push({
      name: contactName,
      phone: contactPhone,
      email: contactEmail,
    });

    document.getElementById("contactName").value =
      "";
    document.getElementById(
      "contactPhone"
    ).value = "";
    document.getElementById(
      "contactEmail"
    ).value = "";

    displayContacts();
  }
}

function removeContact() {
  let removeContactName = document.getElementById(
    "removeContactName"
  ).value;
  contacts = contacts.filter(
    (contact) =>
      contact.name !== removeContactName
  );
  document.getElementById(
    "removeContactName"
  ).value = "";
  displayContacts();
}

function displayContacts() {
  let contactList = document.getElementById(
    "contactList"
  );
  contactList.innerHTML = "";
  for (let i = 0; i < contacts.length; i++) {
    contactList.innerHTML += `<li>${contacts[i].name} | ${contacts[i].phone} | ${contacts[i].email}</li>`;
  }
}
```

이 JavaScript 코드는 다음을 수행합니다:

- `addContact()`는 사용자가 입력한 이름, 전화번호, 이메일을 연락처 배열에 추가하고, 연락처 리스트를 갱신합니다.
- `removeContact()`는 사용자가 입력한 이름을 연락처 배열에서 제거하고, 연락처 리스트를 갱신합니다.
- `displayContacts()`는 현재 연락처 리스트를 화면에 보여줍니다.

이 코드는 단순한 예시이며, 실제 애플리케이션에서는 보다 완성도 높은 유저 인터페이스와 에러 처리, 그리고 데이터 저장을 위한 방법들이 필요할 것입니다.
