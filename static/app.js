const Controller = {
  search: (ev) => {
    ev.preventDefault();
    Controller.loadingResults();
    const form = document.getElementById("form");
    const data = Object.fromEntries(new FormData(form));
    const response = fetch(`/search?q=${data.query}`).then((response) => {
      response.json().then((results) => {
        Controller.updateTable(results, data.query);
      });
    });
  },

  loadingResults: () => {
    const table = document.getElementById("styled-table-body");
    table.innerHTML = "<tr><td></td><td>Retrieving Results</td><td></td></tr>";
  },

  updateTable: (results, searchString) => {
    const table = document.getElementById("styled-table-body");
    const rows = [];
    let sno = 1

    for (let result of results) {
      var re = new RegExp(searchString, 'ig');
      var matchResults = [...new Set(result.match(re))];
      for (let match of matchResults){
        result = result.replace(match, "<mark>"+match+"</mark>");
      }
      rows.push(`<tr><td>${sno}</td><td>${result}</td><td>${matchResults}</td></tr>`);
      sno += 1;
    }
    table.innerHTML = rows.join(" ");
  },
};

const form = document.getElementById("form");
form.addEventListener("submit", Controller.search);
