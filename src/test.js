(function() {
    "use strict";


    describe("Addition", function(){
       it("add positive numbers", function(){

           assertEqual(add(3,4), 7);
       });
       it("use IEEE 754 floating point number", function(){
           // floating point addition

           assertEqual(add(0.1,0.2), 0.30000000000000004);
       });
    });


    function assertEqual(actual, expected){
        if(actual !== expected)  throw new Error("Expected" + expected + ", but was "+ actual);
    }



    function add(a,b){
        return a  + b;
    }


}());