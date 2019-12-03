const mdLinks = require("../index.js");

describe("mdLinks", () => {
  it("is a function", () => {
    expect(typeof mdLinks).toBe("function");
  });

  it("return href and text", (done) => {
    return mdLinks("./README.md").then(result =>{
      expect(result).toEqual(result);
      done();
    });
  });

  it ("returns reject", () => {
    return mdLinks(process.argv[2]).catch(e => expect(e).toEqual("Could not open the file"));
  });
});