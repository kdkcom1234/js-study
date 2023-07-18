const tbody = document.querySelector("tbody");

// for (let i = 0; i < tbody.children.length; i++) {
//   tbody.children[i].children[
//     i
//   ].style.backgroundColor = "red";
// }

for (let tr of tbody.children) {
  let i = Array.from(tbody.children).indexOf(tr);
  tr.children[i].style.backgroundColor = "red";
  // tr.children[i].className = "bg-red";
}
