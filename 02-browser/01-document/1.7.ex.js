const rows =
  document.querySelectorAll("tbody > tr");

const sortedRows = Array.from(rows).sort((a, b) =>
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

function createTree(container, data) {
  if (Object.keys(data).length > 0) {
    const ul = document.createElement("ul");

    for (let prop in data) {
      const li = document.createElement("li");
      li.textContent = prop;
      ul.append(li);
      createTree(li, data[prop]);
    }

    container.append(ul);
  }
}
