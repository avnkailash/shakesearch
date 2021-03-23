const Controller = {
  search: (ev) => {
    ev.preventDefault();
    const form = document.getElementById("form");
    const data = Object.fromEntries(new FormData(form));
    const response = fetch(`/search?q=${data.query}`).then((response) => {
      response.json().then((results) => {
        Controller.updateTable(results, data.query);
      });
    });
  },

  updateTable: (results, searchString) => {
    const table = document.getElementById("styled-table-body");
    const rows = [];
    let sno = 1

    for (let result of results) {
      console.log("Result = ", result);
      var re = new RegExp(searchString, 'ig');
      var matchResults = result.match(re);
      rows.push(`<tr><td>${sno}</td><td>${result}</td><td>${matchResults}</td></tr>`);
      sno += 1;
    }
    console.log("Full Rows = ", rows);
    table.innerHTML = rows.join(" ");
  },
};

const form = document.getElementById("form");
form.addEventListener("submit", Controller.search);
