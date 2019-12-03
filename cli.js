#!/usr/bin/env node

const mdLinks = require('./lib/index.js');

mdLinks(process.argv[2])
    .then(result => result.forEach(i => {
        console.log(i.href, "-", i.text.substring(0, 50))
    }))      
    .catch(console.error)