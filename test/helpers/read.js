var Promise = require('pacta').Promise,
    path = require('path'),
    fs = require('fs'),
    emu = require('../../');

module.exports = function(name) {
    var p = new Promise(),
        stub = name.replace(/\.js$/, ''),
        fullPath = path.resolve(__dirname, '..', 'stubs', stub + '.js');

    fs.readFile(fullPath, 'utf8', function(err, data) {
        p.resolve(data && emu.getComments(data));
    });

    return p;
}