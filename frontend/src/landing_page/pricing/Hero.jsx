import React from 'react';

function Hero() {
    return ( 
        <div className="container">
            <div className="row text-center pt-5 mt-5">
                <h1 className='fs-2'  style={{color:"#424242"}}>Charges</h1>
                <p className='fs-4' style={{color:"#9b9b9b"}}>List of all charges and taxes</p>
                <div className="col p-3" style={{color:"#424242"}}>
                    <img src="\images\pricing0.svg" className='p-5' />
                    <h2 className='fs-3 mb-3'>Free equity delivery</h2>
                    <p style={{lineHeight:"1.75", color:"#666"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col p-3" style={{color:"#424242"}}>
                    <img src="\images\pricingEquity.svg" className='p-5'/>
                    <h2 className='fs-3 mb-3'>Intraday and F&O trades</h2>
                    <p style={{lineHeight:"1.75", color:"#666"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col p-3" style={{color:"#424242"}}>
                    <img src="\images\pricingMF.svg" className='p-5' />
                    <h2 className='fs-3 mb-3'>Free direct MF</h2>
                    <p style={{lineHeight:"1.75", color:"#666"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;