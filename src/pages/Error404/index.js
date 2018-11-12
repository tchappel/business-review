import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div>
            Error 404 <br/>
            Page not found <br/>
            <Link to="/">Go to Homepage</Link>            
        </div>
    );
}

export default Error404;