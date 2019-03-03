(function() {
    "use strict";

    var addition = require("./addition.js");
    var assert = require("./assert.js");

    describe("Addition", function(){
       it("add positive numbers", function(){

           assert.equal(addition.add(3,4), 7);
       });
       it("use IEEE 754 floating point number", function(){
           // floating point addition

           assert.equal(addition.add(0.1,0.2), 0.30000000000000004);
       });
    });





}());