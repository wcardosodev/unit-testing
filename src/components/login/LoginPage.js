import React from 'react';

const getUser = async (username, password) => {
    const users = await getUsers();

    const index = users.findIndex(item => item.username === username && item.password === password);

    if (index !== -1) return users[index];
    return null;
}

const getUsers = () => Promise.resolve([{username: 'jimmy', password: 'password'}, {username: 'sally', password: 'sally123'}]);

const validateLogin = val => {
    if (val !== null && typeof val !== 'undefined') return true;
    return false;
}

const login = async (uname, pword) => {
    if (!validateLogin(uname) || !validateLogin(pword)) return false;

    // mock connection to api
    const user = await getUser(uname, pword);

    if (user === null || typeof user === 'undefined') return null;

    return user;

}

module.exports = {
    login,
    getUser
}

const LoginPage = props => {
    return (
        <div>
            <h1>Login Page</h1>
        </div>
    )
}