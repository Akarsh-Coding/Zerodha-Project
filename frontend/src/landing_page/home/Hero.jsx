import React from 'react';
import {Link} from "react-router-dom"

function Hero() {
    return ( 
    <div className='container text-center p-5 mb-5 pt-0' style={{color:"#424242"}}>
        <div className="row p-5 pt-0 pb-2">
            <img src="/images/homeHero.png" alt="Hero Image" className='p-5 pb-4'/>
            <h1 className='mt-4 fs-2'>Invest in everything</h1>
            <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
        </div>
            <Link to="/signup"><button className='btn btn-primary btn-lg'>Sign up for free</button></Link>
    </div>
    );
}

export default Hero;