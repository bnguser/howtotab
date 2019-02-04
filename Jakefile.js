(function(){
    "use strict";
    var semver = require("semver");
    
    desc("Default Build");
    task("default", ["version"],function(){
        console.log("\n\nBuild Ok");
    });
    desc("Check Node Version");
    task("version",function(){
        console.log("Check node Version : .");

        var packageJson = require("./package.json");
        var expectedVersion =  packageJson.engines.node;

        var actualVersion = process.version;
        if(semver.neq(expectedVersion,actualVersion)){
            fail("Incorrect Node version : expected " + expectedVersion + "but was" + actualVersion);

        }

    });

}());