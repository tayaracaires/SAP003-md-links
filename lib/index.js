// const path = pass

const fs = require("fs");
const noLinks = [];

const mdLinks = (path) => {
  const regex = /([^\[]+)\](\([^\)]*)/gm;
  return new Promise ((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject("Could not open the file");
      } else {
        const matches = data.match(regex);
        if (matches===null) {
          reject ("No matches found");
        } else {
          const result = matches.map((b) => {
            const split = b.split("](");
            const text = split[0].replace("\n ", "");
            const href = split[1].replace(/\)/, "");
            return ({text, href});
          });
          resolve(result);
        };
      }
    });
  });
};

module.exports = mdLinks;