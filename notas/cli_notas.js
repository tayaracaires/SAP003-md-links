const mdLinks = require('./notas.js')

mdLinks()
    .then((result) => console.log(result))
    .catch((error) => console.log(error))