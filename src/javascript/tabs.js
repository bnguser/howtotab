(function(){
    "use strict";


    exports.initialize = function initialize(options){
        var tabs = options.tabs;
        var content = options.content;
        var defaultElement = options.default;
        var contentHideClass = options.contentHideClass;
        var activeTabClass = options.activeTabClass;

        if(tabs===undefined) throw new Error("Expected options.tabs");
        if(content===undefined) throw new Error("Expected options.content");
        if(defaultElement===undefined) throw new Error("Expected options.default");
        if(contentHideClass===undefined) throw new Error("Expected options.contentHideClass");
        if(activeTabClass===undefined) throw new Error("Expected options.activeTabClass");

         content.forEach(function(element){
            element.classList.add(contentHideClass);
        });
        defaultElement.classList.remove(contentHideClass);
       if(tabs!== undefined) tabs[0].classList.add(activeTabClass);
        
    //     var classes = element.getAttribute("class");
    //     if(classes === null) classes = className;
    //    else classes +=" " +className;

    //     element.setAttribute("class", classes);
    };
}());