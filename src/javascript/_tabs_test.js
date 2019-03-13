(function() {
    "use strict";

    var assert = require("./assert.js");
    var tabs = require("./tabs.js");

    describe("Tabs", function(){
       it("set a class on an element when that element has no existing classes", function(){

            var element = document.createElement("div");
          //  document.body.appendChild(element);
            tabs.initialize(element, "someClass");
            assert.equal(getClass(element), "none");
            removeElement(element);
            // var div = document.createElement("div");
           // div.innerHTML = "This is an example.";
           // document.body.appendChild(div);
           // div.parentNode.removeChild(div);
       });
       it("set a class on an element without erasing existing class", function(){
           var element = document.createElement("div");
           tabs.initialize(element, "newClass");
           assert.equal(getClass(element), "existingClass newClass");
           removeElement(element);
       });
       function getClass(element){
        return element.getAttribute("class");
       }
       function addElement(tagname){
           var element = document.createElement(tagname);
           return element;
       }
       function getDisplayProperty(element){
        var styles = getComputedStyle(element);
        return styles.getPropertyValue("display");

       }
       function removeElement(element){
        element.parentNode.removeChild(element);

       }
    });
}());