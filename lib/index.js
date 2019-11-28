// const path = pass

const fs = require('fs');

const mdLinks = () => {
    const regex = /([^\[]+)\](\([^\)]*)/gm
    return new Promise ((resolve, reject) => {
        fs.readFile('README.md', 'utf8', (err, data) => {
            if(err) {
                reject(err);
            } else {
                const matches = data.match(regex);
                const result = matches.map((b) => {
                    const split = b.split('](');
                    const content = split[0].replace('\n ','');
                    const link = split[1].replace(/\)/,'');
                    return ({content, link})
                });
                resolve(result)
            }
        });
    });
}

module.exports = mdLinks;