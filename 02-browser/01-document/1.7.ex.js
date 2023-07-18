const rows =
  document.querySelectorAll("tbody > tr");

// sort를 쓸려면 배열로 변환.
const sortedRows = Array.from(rows).sort((a, b) =>
  a.children[0].textContent.localeCompare(
    b.children[0].textContent
  )
);

for (let row of sortedRows) {
  document.querySelector("tbody").append(row);
}
