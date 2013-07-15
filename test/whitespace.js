var test = require('tape'),
    read = require('./helpers/read');

test('remove leading whitespace', function(t) {
    t.plan(2);

    read('empty-comment').fork(function(data) {
        t.notOk(data instanceof Error, 'not an error');
        t.equal(data, '');
    });
});