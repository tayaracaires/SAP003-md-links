#!/usr/bin/env node

const mdLinks = require('./lib/index.js');

mdLinks()
    .then(result => result.forEach(i => {
        console.log(i.link, "-", i.content.substring(0, 50))
    }))      
    .catch((error) => console.log(error))