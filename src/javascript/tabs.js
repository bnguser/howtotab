(function(){
    "use strict";

    
    exports.initialize = function initialize(options){

        checkOption(options.tabs, "options.tabs");
        checkOption(options.content, "options.content");
        checkOption(options.defaultTab, "options.defaultTab");
        checkOption(options.activeTabClass, "options.activeTabClass");
        checkOption(options.hiddenContentClass, "options.hiddenContentClass");
        

        handleClicks(options);
        showTab(options.defaultTab, options);
         };
            
         function handleClicks(options){
         options.tabs.forEach(function(tabElement){
            tabElement.addEventListener("click", function(event){
                showTab(event.target, options);
            });
         });
        }
        function showTab(tabToShow, options){
        var activeIndex = findIndex(options.tabs, tabToShow);
        var contentToShow = options.content[activeIndex] ;

        options.tabs.forEach(function(element){
            element.classList.remove(options.activeTabClass);
        });
        tabToShow.classList.add(options.activeTabClass);

        options.content.forEach(function(element){
            element.classList.add(options.hiddenContentClass);
        });
        contentToShow.classList.remove(options.hiddenContentClass);
        
    }
        function findIndex(contentTabs, defaultContentTab){
            for(var i=0; i < contentTabs.length; i++)     {
                if(contentTabs[i] === defaultContentTab) 
                return i;
            }
            throw new Error ("could not find default in list");
        }
        function checkOption(option, name){
            if(option === undefined) throw new Error ("Expected" + name);
        }
}());