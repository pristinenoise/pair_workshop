// https://simplestatistics.org/docs/

// Load the facebook data set.

const csv = require("csv-parser");
const fs = require("fs");

function loadCSV(filename) {
  const rows = [];
  let rowsRead = 0;

  return new Promise((resolve, reject) => {
    fs.createReadStream(filename)
      .pipe(csv())
      .on("data", (data) => rows.push(data))
      .on("error", (error) => reject(error))
      .on("end", () => resolve(rows));
  });
}

// or ./datasets/Arrests.csv
// get more small datasets at https://vincentarelbundock.github.io/Rdatasets/datasets.html
loadCSV("./datasets/Backpack.csv").then((results) => {
  console.log("\nData loaded!");
  console.log(results.length);
});
