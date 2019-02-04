(function(){
    "use strict";

    var EXPECTED_NODE_VERSION ="v0.12.4";
    desc("Default Build");
    task("default", ["version"],function(){
        console.log("\n\nBuild Ok");
    });
    desc("Check Node Version");
    task("version",function(){
        console.log("Check node Version : .");

        var actualVersion = process.version;
        if(actualVersion !== EXPECTED_NODE_VERSION){
            fail("Incorrect Node version : expected " + EXPECTED_NODE_VERSION + "but was" + actualVersion);

        }

    });

}());