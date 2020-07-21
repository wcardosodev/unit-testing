const getUsers = () => Promise.resolve({data: [{name: 'Jim'}, {name: 'Tim'}, {name: 'Karen'}]});

const getFoods = () => Promise.resolve({ data: [{name: 'Pizza'}, {name: 'Burger'}, {name: 'Chips'}]});

module.exports = {
    getUsers,
    getFoods
}