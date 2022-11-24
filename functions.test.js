const functions = require('./functions.js');

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

// const initDatabase = () => console.log('Database initialized...');
// const closeDatabase = () => console.log('Database closed...');

const nameCheck = () => console.log('Checking name...');

describe('Checking Names', () => {
    beforeEach(() => nameCheck());

    test('User is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    })

    test('User is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen');
    })
});

//toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

// not.toBe
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should return falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual
test('User should be Brad Traversy object', () => {
    // use toStrictEqual to compare two objects
    expect(functions.createUser()).toEqual({firstName: 'Brad', lastName: 'Traversy'});
});

// lessThan and greater than
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

// regex
test('There is no I in team', () => {
    // /I/i for case incensitive
    expect('team').not.toMatch(/I/i);
});

// arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});

// promise
// test('User fetched name should be Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser()
//         .then(data => {
//             expect(data.name).toEqual('Leanne Graham');
//         })
// });

// async wait
// test('User fetched name should be Leanne Graham', async () => {
//     expect.assertions(1);
//     const data = await functions.fetchUser();
//     expect(data.name).toEqual('Leanne Graham');
// });

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statment treats as true
// toBeFalsy matches anything that an if statement treats as false
