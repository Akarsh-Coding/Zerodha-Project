import React from 'react';

function Team() {
    return ( 
        <div className="container border-top text-muted">
            <div className="row p-5 pb-0 mt-5">
                <h1 className='fs-3  text-center'>People</h1>
            </div>
            <div className="row p-5">
                <div className="col-6 text-center ps-5 pe-0  mb-5">
                    <img className='ms-5' src="/images/nithinKamath.jpg" alt="" style={{borderRadius:"100%", width:"55%"}}/>
                    <p className='fs-5 mt-3 mb-1 ms-5 text-dark'>Nithin Kamath</p>
                    <p className='ms-5'>Founder, CEO</p>
                </div>
                <div className="col-6 ps-0  mb-5" style={{fontSize:"16.1px", lineHeight:"1.65"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> / <a href="#">Twitter</a></p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col text-center mb-5">
                    <img src="/images/NikhilKamath.jpg" alt="" style={{borderRadius:"100%", width:"55%"}}/>
                    <p className='fs-5 mt-3 mb-1 text-muted'>Nikhil Kamath</p>
                    <p style={{color:"#666", margin:"0"}} >Co-founder & CFO</p>
                    <div className='mb-5 dropdown'>
                        <button className="btn dropdown-toggle text-muted border-0 shadow-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">Bio</button>
                        <div className="dropdown-menu p-3">
                            <p>Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.</p>
                        </div>
                    </div>
                    <img className='mt-5' src="/images/SeemaPatil.jpg" alt="" style={{borderRadius:"100%", width:"55%"}}/>
                    <p className='fs-5 mt-3 mb-1 text-muted'>Seema Patil</p>
                    <p style={{color:"#666", margin:"0"}} >Director</p>
                    <div className='mb-5 dropdown'>
                        <button className="btn dropdown-toggle text-muted border-0 shadow-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">Bio</button>
                        <div className="dropdown-menu p-3">
                        <p>Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast.</p>
                        </div>
                    </div>
                </div>
                <div className="col text-center  mb-5">
                    <img src="/images/KailashNadh.jpg" alt="" style={{borderRadius:"100%", width:"55%"}}/>
                    <p className='fs-5 mt-3 mb-1 text-muted'>Dr. Kailash Nadh</p>
                    <p style={{color:"#666", margin:"0"}} >CTO</p>
                    <div className='mb-5 dropdown'>
                        <button className="btn dropdown-toggle text-muted border-0 shadow-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">Bio</button>
                        <div className="dropdown-menu p-3">
                        <p>Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.</p>
                        </div>
                    </div>
                    <img className='mt-5' src="/images/KarthikRangappa.jpg" alt="" style={{borderRadius:"100%", width:"55%"}}/>
                    <p className='fs-5 mt-3 mb-1 text-muted'>Karthik Rangappa</p>
                    <p style={{color:"#666", margin:"0"}} >Chief of Education</p>
                    <div className='mb-5 dropdown'>
                        <button className="btn dropdown-toggle text-muted border-0 shadow-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">Bio</button>
                        <div className="dropdown-menu p-3">
                        <p>Karthik "Guru" Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography.</p>
                        </div>
                    </div>
                </div>
                <div className="col text-center  mb-5">
                    <img src="/images/VenuMadhav.jpg" alt="" style={{borderRadius:"100%", width:"55%"}}/>
                    <p className='fs-5 mt-3 mb-1 text-muted'>Venu Madhav</p>
                    <p style={{color:"#666", margin:"0"}} >COO</p>
                    <div className='mb-5 dropdown'>
                        <button className="btn dropdown-toggle text-muted border-0 shadow-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">Bio</button>
                        <div className="dropdown-menu p-3">
                        <p>Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha.</p>
                        </div>
                    </div>
                    <img className='mt-5' src="/images/AustinPrakesh.jpg" alt="" style={{borderRadius:"100%", width:"55%"}}/>
                    <p className='fs-5 mt-3 mb-1 text-muted'>Austin Prakesh</p>
                    <p style={{color:"#666", margin:"0"}} >Director Strategy</p>
                    <div className='mb-5 dropdown'>
                        <button className="btn dropdown-toggle text-muted border-0 shadow-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">Bio</button>
                        <div className="dropdown-menu p-3">
                        <p>Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;