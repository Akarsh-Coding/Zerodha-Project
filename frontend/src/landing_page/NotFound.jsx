import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return ( 
        <div className='container mt-5 p-5' >
            <h4>404 - Page Not Found</h4>
            <h1>Kiaan couldn’t find that page</h1>
            <h5 style={{fontWeight:"400"}}>We couldn’t find the page you were looking for. <br /> Visit <Link to={"/"}> Zerodha’s home page</Link></h5>
        </div>
    );
}

export default NotFound;