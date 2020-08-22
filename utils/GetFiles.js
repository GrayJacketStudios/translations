const path = require('path');
const fs = require('fs');


module.exports = (path) => {
  return fs.readdirSync(path)
}

module.exports.readFile = (file) => {
    return JSON.parse(fs.readFileSync(file))
}
