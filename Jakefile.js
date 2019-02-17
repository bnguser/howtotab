/*globals jake:false, desc:false, task:false, complete:false, fail:false */


(function(){
    "use strict";
    var semver = require("semver");
    var jshint = require("simplebuild-jshint");
    var karma = require("simplebuild-karma");

    var KARMA_CONF = "karma.conf.js";
    
    //*** General tasks

    desc("Start the karma server(run this first)");
    task("karma", function(){
        console.log("staring the server :");
        karma.start({
            configFile : KARMA_CONF
        }, complete, fail);
    },{async : true});

    desc("Default Build");
    task("default", ["version","Lint","test"],function(){
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
            files: ["Jakefile.js", "src/**/*.js"],
            options: lintOptions(),
            globals: lintGlobals()
        },complete ,fail);

        // jake.exec("node node_modules/jshint/bin/jshint jakefile.js",{interactive : true }, complete);
    },{async:true});

    desc("Run test");
    task("test", function(){
       console.log("Testing Javascript");
       karma.run({
           configFile : KARMA_CONF,
           expectedBrowsers : [
               "Chrome 72.0.3626 (Windows 7.0.0)",
               "Firefox 65.0.0 (Windows 7.0.0)"
           ],
           strict: !process.env.loose
       }, complete, fail);
    },{async : true});

    function lintOptions(){
        return {
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

        };
    }
    function lintGlobals(){
        return {
            //Mocha
            describe: false,
            it: false,
            before: false,
            after: false,
            beforEach: false,
            afterEach: false
        };
    }


}());