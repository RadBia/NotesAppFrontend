import React from 'react';

function User({id, email, login, pass, privilage}) {
    return (
        <tr>
            <td>{id}</td>
            <td>{email}</td>
            <td>{login}</td>
            <td>{pass}</td>
            <td>{privilage}</td>
        </tr>
    );
}

export default User;