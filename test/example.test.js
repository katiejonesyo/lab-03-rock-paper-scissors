import { getRandomThrow, userWins } from '../get-random-throw.js';
const test = QUnit.test;


test('test should return true when paper beats rock.', (expect) => {
    const actual = userWins('rock', 'paper');
    const expected = true;

    expect.equal(actual, expected)
});



