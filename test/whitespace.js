var test = require('tape'),
    read = require('./helpers/read'),
    compare = require('./helpers/compare');

test('can read a test stub', function(t) {
    t.plan(1);
    read('empty-file').map(t.equal.bind(t, ''));
});

test('remove leading whitespace for an empty comment', function(t) {
    t.plan(1);
    read('empty-comment-whitespace').map(t.equal.bind(t, ''));
});

test('remove leading whitespace for a single-line comment', function(t) {
    t.plan(1);
    read('single-line').map(t.equal.bind(t, ' Hello')); // should this be "Hello"?
});

test(
    'remove leading whitespace for a simple multiline comment',
    compare('multiline-simple')
);