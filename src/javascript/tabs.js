(function(){
    "use strict";


    exports.initialize = function initialize(options){
        var tabs = options.tabs;
        var content = options.content;
        var defaultTab = options.defaultTab;
        var hiddenContentClass = options.hiddenContentClass;
        var activeTabClass = options.activeTabClass;

        checkOption(tabs, "options.tabs");
        checkOption(content, "options.content");
        checkOption(defaultTab, "options.defaultTab");
        checkOption(hiddenContentClass, "options.hiddenContentClass");
        checkOption(activeTabClass, "options.activeTabClass");
        
        

        showTab(defaultTab, tabs, content, activeTabClass, hiddenContentClass);

       
        };
        function showTab(defaultTab, tabs, content, activeTabClass, hiddenContentClass){
            var activeIndex = findIndexOfDefualtElement(tabs, defaultTab);
            var defaultContent = content[activeIndex] ;
        content.forEach(function(element){
            element.classList.add(hiddenContentClass);
        });
        defaultContent.classList.remove(hiddenContentClass);
        defaultTab.classList.add(activeTabClass);
    }
        function findIndexOfDefualtElement(contentTabs, defaultContentTab){
            for(var i=0; i<contentTabs.length; i++)     {
                if(contentTabs[i]=== defaultContentTab) return i;
            }
            throw new Error ("could not find default in list");
        }
        function checkOption(option, name){
            if(option === undefined) throw new Error ("Expected" + name);
        }
}());