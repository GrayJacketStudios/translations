const path = require('path');
const fs = require('fs');


module.exports = (path) => {
  return fs.readdirSync(path)
}

module.exports.readFile = (file) => {
    return JSON.parse(fs.readFileSync(file))
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
