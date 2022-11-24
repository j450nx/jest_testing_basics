const reverseString = require('./reversestring.js');

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test('String revserses', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

test('String revserses with upper case', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});