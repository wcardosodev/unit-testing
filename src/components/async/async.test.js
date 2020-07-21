
const { getUsers, getFoods } = require('./asyncFunctions');

test('get users', async () => {
    // Success
    const users = [{name: 'Jim'}, {name: 'Tim'}, {name: 'Karen'}];
    const { data } = await getUsers();
    expect(data).toEqual(users);
}, 10000);

test('get foods', async () => {
    // Fails, food should be chips not chip
    const foods = [{name: 'Pizza'}, {name: 'Burger'}, {name: 'Chip'}];
    const { data } = await getFoods();
    expect(data).toEqual(foods);
});