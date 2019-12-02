const file = require("../lib/index.js");

describe('mdLinks', () => {
  return file.mdLinks().then((response) => {
    expect(response)
  })
}