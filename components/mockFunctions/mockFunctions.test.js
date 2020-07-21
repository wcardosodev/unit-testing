const axios = require('axios');

const mockCb = jest.fn(x => 1 + x);

function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}

test('mock functions 1', () => {
    forEach([0, 1], mockCb);
    
    // expect the cb to not have been called 3 times // true
    expect(mockCb.mock.calls.length).not.toBe(3);

    // expect the second (1) cb calls first (0) arg to be 1 // true
    expect(mockCb.mock.calls[1][0]).toBe(1);

    // expect the second (1) cb calls returned value to be 2 // true
    expect(mockCb.mock.results[1].value).toBe(2);

    // expect the first (0) cb calls returned value not to be 2 (should be 1 // 0 + 1) // true
    expect(mockCb.mock.results[0].value).not.toBe(2);
});

jest.mock('axios');

test('mock functions 2', () => {
    const users = [{name: 'Tim'}, {name: 'James'}, {name: 'Jenny'}];
    const resp = {data: users};

    const data = axios.get.mockResolvedValue(resp);

    return expect(resp.data).toEqual(users);
});

test('mock implementations', () => {
    const myMock = jest.fn(() => 'i am the default val').mockImplementationOnce(() => 'first value').mockImplementationOnce(() => 'second value');

    // Will call the first 'mockImplementationOnce' // first value
    console.log(myMock());

    // Will call the second 'mockImplementationOnce' // second value
    console.log(myMock());

    // As there are no more 'mockImplementationOnce' it will call the default (.fn()) // i am the default val
    // all future console.log(myMock()) will return // i am the default val
    console.log(myMock());

    console.log(myMock());
})