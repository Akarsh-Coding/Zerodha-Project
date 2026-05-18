import React from 'react';

function Education() {
    return ( 
        <div className="container" >
            <div className="row">
                <div className="col-6">
                    <img src="/images/education.svg" alt="" style={{width:"80%"}}/>
                </div>
                <div className="col-6 pt-4" style={{color:"#424242"}}>
                    <h2 className='fs-4'>Free and open market education</h2>
                    <p style={{margin:"36px 0 15px"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="https://zerodha.com/varsity" style={{fontWeight:"500"}}>Versity <i class="fa-solid fa-arrow-right-long"></i></a>
                    <p style={{margin:"30px 0 15px"}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="https://tradingqna.com/" style={{fontWeight:"500"}}>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;