// This selects all the table rows in an array
const tableRows = document.getElementsByTagName("tr");

// This spreads the HTML collection array so we can utilize it
// const tableRowArray = Array.from(tableRows)
// OR
const tableRowArray = [...tableRows];
// console.log(tableRowArray);

// USING ES6 FUNCTION MAP() FOR ITERATION
tableRowArray.slice(1).map(tableRow => {
  // const tableRaw = tableRow.cells
  console.log(tableRow.cells);
});
