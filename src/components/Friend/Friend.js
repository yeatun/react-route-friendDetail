import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name,email,id} = props.friend;
    const friendStyle ={
        border:'1px solid purple',
        margin : '20px',
        padding : '20px',
        borderRadius:'20px',

    }
    return (
        <div style ={friendStyle}>
            <h1>Name: {name}</h1>
            <h5>email: {email}</h5>
            <Link to={`/friend/${id}`}><button>show details with {id}</button></Link>
        </div>
    );
};

export default Friend;