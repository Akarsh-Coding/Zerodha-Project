import React from 'react';

function Hero() {
    return ( 
        <div className="container text-center mt-5 pb-5 border-bottom" style={{color:"#424242"}}>
            <div className="row mt-5 mb-4 p-5">
                <h1 style={{fontSize:"28px",margin:"10px"}}>Zerodha Products</h1>
                <p className='fs-5 mt-10 mb-15'>Sleek, modern, and intuitive trading platforms</p>
                <p>Check out our <a style={{fontWeight:"500"}} href="#">investment offerings <i class="fa-solid fa-arrow-right-long"></i></a></p>
            </div>
        </div>
    );
}

export default Hero;