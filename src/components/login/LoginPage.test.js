const renderer = require('react-test-renderer');
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

// Snapshot testing
it('create random user', () => {
    const user = {
        createdAt: new Date(),
        id: Math.floor(Math.random() * 20)
    };

    expect(user).toMatchSnapshot({
        createdAt: expect.any(Date),
        id: expect.any(Number)
    });
});

it('will fail every time', () => {
    // Creates it with initial values for example
    // createdAt = july20th2020
    // id = 12
    // when the first test is run the values will be the same and this will pass
    // however that snapshot is then saved, so each next time u do the test the values won't be the same and it would need to be updated
    const user = {
      createdAt: new Date(),
      id: Math.floor(Math.random() * 20),
      name: 'LeBron James',
    };
  
    expect(user).toMatchSnapshot();
  });