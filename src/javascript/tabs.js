(function(){
    "use strict";


    exports.initialize = function initialize(options){
        var elementList = options.content;
        var defaultElement = options.default;
        var className = options.contentHideClass;


        if(elementList===undefined) throw new Error("Expected options.content");
        if(defaultElement===undefined) throw new Error("Expected options.default");
        if(className===undefined) throw new Error("Expected options.contentHideClass");

         elementList.forEach(function(element){
            element.classList.add(className);
        });
        defaultElement.classList.remove(className);
        
    //     var classes = element.getAttribute("class");
    //     if(classes === null) classes = className;
    //    else classes +=" " +className;

    //     element.setAttribute("class", classes);
    };
}());