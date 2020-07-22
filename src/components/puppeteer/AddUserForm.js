import React from 'react';

// return true if valid, else false
const validate = val => {
    if (val !== null && typeof val !== 'undefined') return true;
    return false;
}

const addUser = (name, age) => {
    // If they don't validate then do nothing
    if (!validate(name) || !validate(age)) return false;

    // to say added
    return true;
}

module.exports = {
    validate,
    addUser
}

const AddUserForm = props => {
    const log = () => console.log('called');

    return (
        <div>
            <h1>Add User Form</h1>
            <label>Name</label>
            <input className='name-input'/>
            <label>Age</label>
            <input className='age-input'/>
            <button onClick={log}>Add Users</button>
        </div>
    )
};

export default AddUserForm;