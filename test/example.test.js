import { getRandomThrow, userWins } from '../get-random-throw.js';
const test = QUnit.test;


test('test should return true if a string is generated.', (expect) => {
    const actual = getRandomThrow();
    expect.equal(typeof actual, 'string');
});

