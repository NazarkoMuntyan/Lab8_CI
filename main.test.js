const add = require('./main');
test('1 + 2 повинно дорівнювати 3', () => { expect(add(1, 2)).toBe(3); });
test('2 + 2 повинно дорівнювати 4', () => { expect(add(2, 2)).toBe(4); });