const mdLinks = require("../index.js");

describe("mdLinks", () => {
  it("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });

  it("return href and text", (done) => {
    return mdLinks("lib/_tests_/README_.md").then(result =>{
      expect(result).toEqual(result);
      done();
    });
  });

  it("return no links", (done) => {
    return mdLinks("lib/_tests_/TESTE2.md").catch(reject =>{
      expect(reject).toEqual("No matches found");
      done();
    });
  });

  it ("returns reject", () => {
    return mdLinks(process.argv[2]).catch(e => {
      expect(e).toEqual("Could not open the file");
    });
  }); 

});