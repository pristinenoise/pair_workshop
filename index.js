// https://simplestatistics.org/docs/

// Load the facebook data set.

const csv = require("csv-parser");
const fs = require("fs");
const data
const Statistics = require("statistics.js");

function loadCSV(filename) {
  const rows = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filename)
      .pipe(csv())
      .on("data", (data) => rows.push(data))
      .on("error", (error) => reject(error))
      .on("end", () => resolve(rows));
  });
}

// get more small datasets at https://vincentarelbundock.github.io/Rdatasets/datasets.html
loadCSV("./datasets/Backpack.csv").then((results) => {
  console.log("\nData loaded!");
  console.log(`${results.length} rows`);
  console.log(`First row: ${JSON.stringify(results[0])}`);

  const columns = {
    BackpackWeight: "metric",
    BodyWeight: "metric",
    Ratio: "interval",
    BackProblems: "nominal",
    Major: "nominal",
    Year: "nominal",
    Gender: "nominal",
    Status: "nominal",
    Units: "interval",
  };
  const stats = new Statistics(results, columns);

  const 
});
