import React from 'react';

function Hero() {
    return ( 
        <div className="container">
            <div className='text-center mt-5 pt-5'>
            <h1 style={{color:'#424242', fontSize:"28px"}}>Open a free demat and trading account online</h1>
            <p className='fs-5 mt-4 text-muted'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</p>
            </div>
            <div className="row mt-5 p-5">
                <div className="col-7">
                    <img src="/images/account_open.svg" alt="" />
                </div>
                <div className="col-5 pt-4 ps-4">
                    <h2 style={{color:"#424242", fontSize:"24.5px"}}>Signup now</h2>
                    <p className='text-muted'>Or track your existing application</p>
                    <form action="" style={{fontSize:"18px"}}>
                        <div className='border mt-4'>
                        <span className='border' style={{padding:"12px 10px",color:"#424242"}}><img className='me-2' src="/images/india-flag.svg" alt="" />+91</span>
                        <input type="text" placeholder='Enter your mobile number' style={{border:"0", padding:"10px", color:"#999",fontWeight:"500"}}/>
                        </div>
                        <br />
                        <button className='btn btn-primary btn-lg mb-4' style={{padding:"10px 30px",width:"260px",height:"54"}}>Get OTP</button>
                    </form>
                    <p style={{fontSize:"12px",color:"#666"}}>By proceeding, you agree to the Zerodha <a href="#" style={{fontWeight:"500"}}>terms</a> & <a href="#" style={{fontWeight:"500"}}>privacy policy</a></p>
                    <hr />
                    <p style={{color:"#424242", fontSize:"12px"}}>Looking to open NRI account? <a href="#" style={{fontWeight:"500"}}>Click here</a></p>
                </div>
            </div>
        </div>
    );
}

export default Hero;