/*globals jake:false, desc:false, task:false, complete:false, fail:false */


(function(){
    "use strict";
    var semver = require("semver");
    var jshint = require("simplebuild-jshint");
    
    //*** General tasks

    desc("Default Build");
    task("default", ["version","Lint", "run"],function(){
        console.log("\n\nBuild Ok");
    });

    desc("Run localhost server");
    task("run", function(){
        jake.exec("node node_modules/http-server/bin/http-server src",  {interactive : true}, complete);
    });



    //*** Supporting tasks

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
    desc("Lint JavaScript Code");
    task("Lint", function(){
        process.stdout.write("Linting JavaScript");

        jshint.checkFiles({
            files: "Jakefile.js",
            options:{
                bitwise : true,
                eqeqeq : true,
                futurehostile : true,
                forin : true,
                freeze : true,
                latedef : "nofunc",
                noarg: true,
                nocomma : true,
                nonbsp : true,
                nonew : true,
                strict : true,
                undef : true,


                node : true,
                browser: true,

            },
            globals:{}
        },complete ,fail);


        // jake.exec("node node_modules/jshint/bin/jshint jakefile.js",{interactive : true }, complete);
    },{async:true});


}());