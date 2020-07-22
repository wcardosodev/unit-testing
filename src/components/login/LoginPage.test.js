const { login, getUser } = require('./LoginPage');

// Integration test
// Tests login, getUser, getUsers and validateLogin
test('Test login', async () => {
    const user1 = await login('jimmy', 'password');

    expect(user1).toEqual({username: 'jimmy', password: 'password'});

    const user2 = await login('jam', 'password');

    expect(user2).toBeNull();
});

test('Get user', async () => {
    const user1 = await getUser('jimmy', 'password');

    expect(user1).toEqual({username: 'jimmy', password: 'password'});
});