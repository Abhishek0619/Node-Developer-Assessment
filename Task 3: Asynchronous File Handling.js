const fs = require('fs');
// Read contents of the file asynchronously
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
// Splitting the text into words using whitespace as delimiter
const words = data.split(/\s+/);
// Counting the number of words
const wordCount = words.length;
console.log('Total word count:', wordCount);
});
