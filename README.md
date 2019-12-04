# Markdown Links

## Índice

* [1. Sobre](#1-sobre)
* [2. Como instalar](#2-como-instalar)
* [3. Como utilizar](#3-como-utilizar)
* [4. Ferramentas utilizadas](#4-ferramestas-utilizadas)

***

## 1. Sobre

Esta biblioteca extrai links de url em um arquivo _markdown_, podendo ser executada diretamente pelo terminal ou importado com `require` para ser utilizada em seu código.
O retorno da função é uma promessa (`Promise`) que resolve uma array (`Array`) e objetos (`Objects`), onde cada objeto representa um link, contendo as seguintes propriedades:

`href`: URL encontrada.

`text`: Texto dentro do markdown.

## 2. Instalação

Para utilizar a biblioteca é necessário ter instalado o [_Node.js_](https://nodejs.org/en/download/)

Para instalar a biblioteca utilize o seguinte comando no terminal:

```sh
npm install -g tayaracaires/SAP003-md-links
```

## 4. Como utilizar

A partir do terminal:

```sh
md-links <endereço-do-arquivo>
```

Por exemplo:

```sh
$ md-links ./documents/example.md
http://exemplo.com - Link de exemplo
http://google.com/ - Google
```

Caso nenhum link seja encontrado:

```sh
$ md-links ./documents/example.md
No matches found
```

Outro forma de utilizar é importando o modulo utilizando `require`, por exemplo:

```js
> const mdlinks = require('md-links');
> mdlinks('path/exemple.md')
  .then((link) => {
  console.log(`${href} - ${text}`)
})
  //returns 'link - title'
```

## 5. Ferramentas utilizadas

Para desenvolver esta biblioteca, foram utilizadas as seguintes ferramentas:

* JavaScript
* GIT
* GitHub
* Node js
* Jest
* Visual Studio Code
* Trello

***
