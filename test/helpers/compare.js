var read = require('./read'),
    path = require('path'),
    fs = require('fs'),
    Promise = require('pacta').Promise;

module.exports = function(name) {
    return function(t) {
        var p = new Promise(),
            stub = name.replace(/\.md$/, ''),
            fullPath = path.resolve(__dirname, '..', 'expected-output', stub + '.md');

        fs.readFile(fullPath, 'utf8', function(err, data) {
            p.resolve(data);
        });

        t.plan(1);
        read(name).conjoin(p).spread(t.equal.bind(t));
    };
};