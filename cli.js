#!/usr/bin/env node

const mdLinks = require('./lib/index.js')

mdLinks()
    .then((result) => {
        console.log(result))
    }    
    .catch((error) => console.log(error))