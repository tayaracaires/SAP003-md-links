const mdLinks = require('./notas.js/index.js')

mdLinks()
    .then((result) => console.log(result))
    .catch((error) => console.log(error))