(function(){
    "use strict";


    exports.initialize = function initialize(elementList, className){

        elementList.forEach(function(element){
            element.classList.add(className);
        });
        
    //     var classes = element.getAttribute("class");
    //     if(classes === null) classes = className;
    //    else classes +=" " +className;

    //     element.setAttribute("class", classes);
    };
}());