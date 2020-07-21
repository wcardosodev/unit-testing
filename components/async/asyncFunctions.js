const axios = require('axios');
const to = require('await-to-js');

const asyncFn = async () => {
    const data = await axios.get('https://crossorigin.me/https://google.com', {
        headers: {
            'access-control-allow-origin': '*',
            'access-control-allow-credentials': 'true'
        }
    });

    return data;
}

module.exports = {
    asyncFn
}