// https://simplestatistics.org/docs/

// Load the facebook data set.


const csv = require('csv-parser');
const fs = require('fs');



function loadCSV(filename) {
  const rows = [];
  let rowsRead = 0;

  return new Promise((resolve, reject) => {
  fs.createReadStream(filename)
    .pipe(csv())
    .on('data', (data) => {
      rowsRead += 1;
      if (rowsRead % 10000 === 0) { // every 10000 rows, output a dot
        process.stdout.write('.');
      }

     rows.push(data);
    })
    .on('error', (error) => reject(error))
    .on('end', () => resolve(rows))
  });

}


loadCSV('./datasets/Backpack.csv')
  .then ((results) => {
      console.log("\nData loaded!");
      console.log(results.length);

});
