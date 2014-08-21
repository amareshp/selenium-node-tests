/**
 * Created by apattanaik on 8/21/2014.
 */

var fs = require('fs');

sleeper = function(milli) {
    var e = new Date().getTime() + milli;
    console.log('sleepig: ' + milli + ' milliseconds');

    while (new Date().getTime() <= e) {
        /* do nothing, but burn a lot of CPU while doing so */
        /* jshint noempty: false */
    }
}

caller = function(msec, callback){
    sleeper(msec);
    callback();
}
callback = function(){
    console.log('called back using callback function');
};

caller(3000, function() {
    console.log('called back');
});

//caller(5000, callback);
