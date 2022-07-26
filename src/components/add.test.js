const add  = require('./add');

test('2 + 3은 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('2 + 3은 7 아님', () => {
    expect(add(2, 3)).not.toBe(7);
});