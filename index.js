const dl = require("datalib");

const data = dl.csv("./datasets/Backpack.csv");

// api reference: https://github.com/vega/datalib/wiki/API-Reference
// examples: https://github.com/vega/datalib/wiki/Examples
console.log("First 5 rows:");
console.log(dl.format.table(data, { limit: 5 }));

// console.log(`Number of people by major: `);
// const countByMajor = dl.groupby("Major").count().execute(data);
// console.log(dl.format.table(countByMajor));
