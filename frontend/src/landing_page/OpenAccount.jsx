import React from 'react';
import {Link} from "react-router-dom"

function OpenAccount() {
    return (
    <div className='container text-center'>
        <div className="row">
            <h2 className='fs-3' style={{color:"#424242"}}>Open a Zerodha account</h2>
            <p className='mt-3 text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        </div>
            <Link to="/signup"><button className='btn btn-primary btn-lg mt-4'>Sign up for free</button></Link>
    </div>
    );
}

export default OpenAccount;