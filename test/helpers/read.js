var Promise = require('fantasy-promises'),
    path = require('path'),
    fs = require('fs'),
    emu = require('../../');

module.exports = function(name) {
    return new Promise(function(resolve) {
        var stub = name.replace(/\.js$/, ''),
            fullPath = path.resolve(__dirname, '..', 'stubs', stub + '.js');

        fs.readFile(fullPath, 'utf8', function(err, data) {
            if (err) {
                return resolve(err);
            }

            resolve(emu.getComments(data));
        });
    });
}