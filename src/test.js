(function() {
    "use strict";


    var assert = require("chai").assert;

    describe("Addition", function(){
       it("add positive numbers", function(){
           // basic addition
           assert.equal(add(3,4), 7);
       });
       it("use IEEE 754 floating point number", function(){
           // floating point addition

           assert.equal(add(0.1,0.2), 0.30000000000000004);
       });
    });






    function add(a,b){
        return a + b;
    }


}());