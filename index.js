"use strict";

let fs = require('fs');

module.exports = {

  readAllJSON: (file) => {
    var read = !fs.existsSync(file) ? null : fs.readFileSync(file, {encoding: 'utf8'});
    return read === null ? {} : JSON.parse( read );
  },

  saveAllJSON: (file,json) => {
    fs.writeFileSync(file,JSON.stringify(json));
  }
}
