// This selects all the table rows in an array
const tableRowArray = document.getElementsByTagName("tr");
// console.log(tableRowArray);

// USING A FOR LOOP FOR ITERATION
// This iterates through the table row array, and brings out each individual table row
for (let i = 1; i < tableRowArray.length; i++) {
  const tableRow = tableRowArray[i];

  // Selects all the table data into an array
  const tableDataArray = tableRow.cells;

  // This selects the Read table data and performs a function
  const tableDataRead = tableDataArray[2];
  tableDataRead.addEventListener("click", (e) => {
    const togClass = tableDataRead.classList.toggle("true");
  
    if (togClass) {
      tableDataRead.textContent = `Completed`
    } else {
      tableDataRead.textContent = `Pending`
    }
  })

  // Can I not iterate this because of the HTML collection array
  for (let j = 0; j < tableDataArray; j++) {
    const tableData = tableDataArray[j]
    tableData.addEventListener("click", () => {
      // console.log("Clicked");
    })
    console.log(tableData);
  }
}


// CAN I USE AN ES6 FUNCTION LIKE MAP() INSTEAD OF THE FOR LOOP?


// const tableBodyArray = document.getElementsByTagName("tbody");
// console.log(tableBodyArray);

// for (let i = 0; i < tableBodyArray.length; i++) {
//   const tableBody = tableBodyArray[i];
  // console.log(tableBody);

//   const tableRowArray = tableBody.children;
  // console.log(tableRowArray);

//   for(let j = 0; j < tableRowArray.length; j++) {
//     const tableRow = tableRowArray[j];
    // console.log(tableRow);

//     const tableDataArray = tableRow.children;
    // console.log(tableDataArray);
//   }
// }

// FIGURE OUT WHY THE TABLEDATA FOR LOOP IS NOT ITERATING

// for (let k = 1; k < tableDataArray; k++) {
//   const tableData = tableDataArray[k];
//   console.log(tableDataArray[k]);
// }
// console.log(tableBodyArray);