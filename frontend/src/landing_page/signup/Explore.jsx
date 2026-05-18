import React from 'react';

function Explore() {
    return ( 
        <div className="container" style={{color:"#424242"}}>
            <div style={{margin:"0 20px", padding:"0 0 150px 0"}}>
                <div className='text-center mb-5'>
                    <h2 className='fs-4'>Investment options with Zerodha demat account</h2>
                </div>
                <div className="row">
                    <div className="col ps-5 pe-4">
                        <div className="d-flex">
                            <img src="/images/stocks-acop.svg" alt="" />
                            <div className='p-5'>
                                <h3 className='fs-5'>Stocks</h3>
                                <p className='text-muted'>Invest in all exchange-listed securities</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <img src="/images/ipo-acop.svg" alt="" />
                            <div className="p-5">
                                <h3 className='fs-5'>IPO</h3>
                                <p className='text-muted'>Apply to the latest IPOs instantly via UPI</p>
                            </div>
                        </div>
                    </div>
                    <div className="col ps-4 pe-4" >
                        <div className="d-flex">
                            <img src="/images/mf-acop.svg" alt="" />
                            <div className="p-5">
                                <h3 className='fs-5'>Mutual funds</h3>
                                <p className='text-muted'>Invest in commission-free direct mutual funds</p>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <img src="/images/fo-acop.svg" alt="" />
                            <div className='p-5'>
                                <h3 className='fs-5'>Futures & options</h3>
                                <p className='text-muted'>Hedge and mitigate market risk through simplified F&O trading</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-3'>
                    <button className='btn btn-lg btn-primary' style={{padding:"10px 30px"}}>Explore Investments</button>
                </div>
            </div>
            <div style={{paddingBottom:"100px"}}>
                <div className='text-center'>
                    <h2 className='fs-4' style={{margin:"0 0 50px"}}>Steps to open a demat account with Zerodha</h2>
                </div>
                
                <div className="row">
                    <div className="col p-5 pt-4">
                        <img src="/images/steps-acop.svg" alt="" />
                    </div>
                    <div className="col p-5">
                        <div className='d-flex align-items-center' style={{borderBottom:"1px solid #ddd"}}><i class="fa-regular fa-circle fs-4"></i><p className='fs-5' style={{margin:"20px 0 15px 15px", fontWeight:"500"}}>Enter the requested details</p></div>
                        <div className='d-flex align-items-center' style={{borderBottom:"1px solid #ddd"}}><i class="fa-regular fa-circle fs-4"></i><p className='fs-5' style={{margin:"20px 0 15px 15px", fontWeight:"500"}}>Complete e-sign & verification</p></div>
                        <div className='d-flex align-items-center'><i class="fa-regular fa-circle fs-4"></i><p className='fs-5' style={{margin:"20px 0 15px 15px", fontWeight:"500"}}>Start investing!</p></div>
                    </div>
                </div>
            </div>
            <div style={{paddingBottom:"100px"}}>
                <div className="row d-flex align-items-center">
                    <div className="col">
                        <img src="/images/acop-benefits.svg" alt="" style={{width:"78%", marginBottom:"15px"}}/>
                        <h2 className='fs-4'>Benefits of opening a Zerodha demat account</h2>
                    </div>
                    <div className="col">
                        <h3 className='fs-5 mb-4'>Unbeatable pricing</h3>
                        <p style={{lineHeight:"1.75", margin:"16px 0 15px", color:"#666"}}>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
                        <h3 className='fs-5 mb-4 mt-5'>Best investing experience</h3>
                        <p style={{lineHeight:"1.75", margin:"16px 0 15px", color:"#666"}}>Simple and intuitive trading platform with an easy-to-understand user interface.</p>
                        <h3 className='fs-5 mb-4 mt-5'>No spam or gimmicks</h3>
                        <p style={{lineHeight:"1.75", margin:"16px 0 15px", color:"#666"}}>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
                        <h3 className='fs-5 mb-4 mt-5'>The Zerodha universe</h3>
                        <p style={{lineHeight:"1.75", margin:"16px 0 15px", color:"#666"}}>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='text-center' style={{marginBottom:"50px"}}>
                    <h2 className='fs-4 m-0'>Explore different account types</h2>
                </div>
                <div className="row gap-4">
                    <div className="col">
                        <div className="account-card border" style={{padding:"30px"}}>
                            <div className="account-icon">
                                <img src="/images/acop-individual.svg" alt="" />
                            </div>
                            <h3 style={{fontSize:"18px", marginBottom:"20px"}}>Individual Account</h3>
                            <p className='text-muted mt-3 mb-0'>Invest in equity, mutual funds and derivatives</p>
                        </div>
                        <div className="account-card border" style={{padding:"30px",marginTop:"60px"}}>
                            <div className="account-icon">
                                <img src="/images/acop-minor.svg" alt="" />
                            </div>
                                <h3 style={{fontSize:"18px", marginBottom:"20px"}}>Minor Account</h3>
                                <p className='text-muted mt-3 mb-0'>Teach your little ones about money & invest for their future with them</p>
                            
                            </div>
                    </div>
                    <div className="col">
                        <div className="account-card border" style={{padding:"30px"}}>
                            <div className="account-icon">
                                <img src="/images/acop-huf.svg" alt="" />
                            </div>
                                <h3 style={{fontSize:"18px", marginBottom:"20px"}}>HUF Account</h3>
                                <p className='text-muted mt-3 mb-0'>Make tax-efficient investments for your family</p>
                            
                        </div>
                        <div className="account-card border" style={{padding:"30px",marginTop:"60px"}}>
                            <div className="account-icon">
                                <img src="/images/acop-corporate.svg" alt="" />
                            </div>
                                <h3 style={{fontSize:"18px", marginBottom:"20px"}}>Corporate / LLP/ Partnership</h3>
                                <p className='text-muted mt-3 mb-0'>Manage your business surplus and investments easily</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="account-card border" style={{padding:"30px"}}>
                            <div className="account-icon">
                                <img src="/images/acop-nri.svg" alt="" />
                            </div>
                                <h3 style={{fontSize:"18px", marginBottom:"20px"}}>NRI Account</h3>
                                <p className='text-muted mt-3 mb-0'>Invest in equity, mutual funds, debentures, and more</p>
                        </div>
                        {/* <div className='border border-hover' style={{padding:"30px"}}>
                            <h3 style={{fontSize:"18px"}}></h3>
                            <p className='text-muted'></p>
                        </div> */}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Explore;