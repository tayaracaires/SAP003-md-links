// testar esse aqui 


const fs = require('fs');

const mdLinks = () => {
    const regex = '';

    return new Promise ((resolve, reject) => {
        fs.readFile('README.md', 'utf8', (err, data) => {
            if(err) {
                reject(err);
            } else {
                const matches = data.match(links);
                const result = matches.map((el) => {
                    const splitted = el.split
                })
            }
        })
    })
}
