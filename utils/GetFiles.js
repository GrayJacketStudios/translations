var path = require('path');
const fs = require('fs');

const util = require('util');

const readdir = util.promisify(fs.readdir);

module.exports = (path) => {
  return new Promise((resolve, reject) => {
    readdir(path, (err, files) => {
      if(err) reject(err)
      if(files.length == 0)
        reject("Empty translation directory")
      else {
        resolve(files)
      }
    });
  });
}



// async function (path) {
//   let res = await readdir(path, function (err, files) {
//     //handling error
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     }
//     //listing all files using forEach
//     return files
//   });
//   return res
// }
