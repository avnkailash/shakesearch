const Controller = {
  search: (ev) => {
    ev.preventDefault();
    const form = document.getElementById("form");
    const data = Object.fromEntries(new FormData(form));
    const response = fetch(`/search?q=${data.query}`).then((response) => {
      response.json().then((results) => {
        Controller.updateTable(results);
      });
    });
  },

  updateTable: (results) => {
    const table = document.getElementById("styled-table-body");
    const rows = [];
    rows.push('<tr><th>S.No</th><th>Search Results</th></tr>');
    let sno = 1
    for (let result of results) {
      console.log("Result = ", result);
      rows.push(`<tr><td>${sno}</td><td>${result}</td></tr>`);
      sno += 1;
    }
    console.log("Full Rows = ", rows);
    table.innerHTML = rows;
  },
};

const form = document.getElementById("form");
form.addEventListener("submit", Controller.search);
