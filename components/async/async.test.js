
const { asyncFn } = require('./asyncFunctions');

test('testing async fn', async done => {
    const data = await asyncFn();
    expect(data).not.toBe('text');
});