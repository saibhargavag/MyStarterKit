import chai from "chai";
import jdom from "jsdom";
import files from "fs";

describe("our first test",function(){
it("it should pass",function(){
  chai.expect(true).to.equal(true);
});
});


describe("test2",function(){
  it("pass test 2",function(done){
    const index=files.readFileSync("./src/index.html","utf-8");
    jdom.env(index,function(err,window){
      const h2=window.document.getElementsByTagName('h2')[0];      
      chai.expect(h2.innerHTML).to.equal("Welcome to my Starter Kit");
      done();
      window.close();
    });
  });
});
