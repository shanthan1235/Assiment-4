const fs = require('fs');

const folderName = '/hi/joe/test';
const ownername ='/kiry/';

try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}


