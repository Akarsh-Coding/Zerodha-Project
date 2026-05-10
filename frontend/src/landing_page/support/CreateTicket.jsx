import React, { useState } from 'react';

function CreateTicket() {
const [open, setOpen] = useState([false, false, false, false, false, false]);

const toggleList = (index) => {
    setOpen(prev => prev.map((item, i) => i === index ? !item : item));
};
    return ( 
        <div className="container mt-5 p-0">
            <div className="row">
                <div className="col p-0 d-flex flex-column gap-4">
                    <div >
                        <div onClick={() => toggleList(0)} style={{ cursor: "pointer" }}
                                className='hover-enlarges mt-2 d-flex border align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <span className='ps-3'><i style={{fontSize:"20px", color:"#387ed1"}} class="fa-solid fa-circle-plus"></i></span>
                                <h2 className='fs-5 m-0 p-3'>Account Opening</h2>
                            </div>
                            <span className='pe-3'><i className={`fa-solid ${ open[0] ? "fa-chevron-up" : "fa-chevron-down"}`}></i></span>
                        </div>
                        
                        <div className='Sub-list border' style={{
                            maxHeight: open[0] ? "500px" : "0px",
                            overflow: "hidden", transition: "max-height 0.75s ease"}}>
                            <ul style={{padding:"16px 0 0 64px"}}>
                                <a href="#"><li className='p-2'>Resident individual</li></a>
                                <a href="#"><li className='p-2'>Minor</li></a>
                                <a href="#"><li className='p-2'>Non Resident Indian (NRI)</li></a>
                                <a href="#"><li className='p-2'>Company, Partnership, HUF and LLP</li></a>
                                <a href="#"><li className='p-2'>Glossary</li></a>
                            </ul>
                        </div>
                    
                    </div>
                    <div >
                        <div onClick={() => toggleList(1)} style={{ cursor: "pointer" }}
                                className='hover-enlarges mt-2 d-flex border align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <span className='ps-3'><i style={{fontSize:"20px", color:"#387ed1"}} class="fa-regular fa-circle-user"></i></span>
                                <h2 className='fs-5 m-0 p-3'>Your Zerodha Account</h2>
                            </div>
                            <span className='pe-3'><i className={`fa-solid ${ open[1] ? "fa-chevron-up" : "fa-chevron-down"}`}></i></span>
                        </div>
                        
                        <div className='Sub-list border' style={{
                            maxHeight: open[1] ? "500px" : "0px",
                            overflow: "hidden", transition: "max-height 0.75s ease"}}>
                            <ul style={{padding:"16px 0 0 64px"}}>
                                <a href="#"><li className='p-2'>Your Profile</li></a>
                                <a href="#"><li className='p-2'>Account modification</li></a>
                                <a href="#"><li className='p-2'>Client Master Report (CMR) and Depository Participant (DP)</li></a>
                                <a href="#"><li className='p-2'>Nomination</li></a>
                                <a href="#"><li className='p-2'>Transfer and conversion of securities</li></a>
                            </ul>
                        </div>
                        
                    </div>
                    <div >
                        <div onClick={() => toggleList(2)} style={{ cursor: "pointer" }}
                                className='hover-enlarges mt-2 d-flex border align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <img src="/images/KiteIcon.png" style={{width:"3.5%"}} className='ms-3'/>
                                <h2 className='fs-5 m-0 p-3'>Kite</h2>
                            </div>
                            <span className='pe-3'><i className={`fa-solid ${ open[2] ? "fa-chevron-up" : "fa-chevron-down"}`}></i></span>
                        </div>
                        <div className='Sub-list border' style={{
                            maxHeight: open[2] ? "500px" : "0px",
                            overflow: "hidden", transition: "max-height 0.75s ease"}}>
                            <ul style={{padding:"16px 0 0 64px"}}>
                                <a href="#"><li className='p-2'>IPO</li></a>
                                <a href="#"><li className='p-2'>Trading FAQs</li></a>
                                <a href="#"><li className='p-2'>Margin Trading Facility (MT F) and Margins</li></a>
                                <a href="#"><li className='p-2'>Charts and orders</li></a>
                                <a href="#"><li className='p-2'>Alerts and Nudges</li></a>
                                <a href="#"><li className='p-2'>General</li></a>
                            </ul>
                        </div>
                    </div>
                    <div >
                        <div onClick={() => toggleList(3)} style={{ cursor: "pointer" }} 
                                className='hover-enlarges mt-2 d-flex border align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <img src="/images/rupee.svg" style={{width:"5%", color:"#387ed1"}} className='ms-3'/>
                                <h2 className='fs-5 m-0 p-3'>Funds</h2>
                            </div>
                            <span className='pe-3'><i className={`fa-solid ${ open[3] ? "fa-chevron-up" : "fa-chevron-down"}`}></i></span>
                        </div>
                        <div className='Sub-list border' style={{
                            maxHeight: open[3] ? "500px" : "0px",
                            overflow: "hidden", transition: "max-height 0.75s ease"}}>
                            <ul style={{padding:"16px 0 0 64px"}}>
                                <a href="#"><li className='p-2'>Add money</li></a>
                                <a href="#"><li className='p-2'>Withdraw money</li></a>
                                <a href="#"><li className='p-2'>Add bank accounts</li></a>
                                <a href="#"><li className='p-2'>eMandates</li></a>
                            </ul>
                        </div>
                    </div>
                    <div >
                        <div onClick={() => toggleList(4)} style={{ cursor: "pointer" }} 
                                className='hover-enlarges mt-2 d-flex border align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <img src="/images/ConsoleIcon.png" style={{width:"3.2%"}} className='ms-3'/>
                                <h2 className='fs-5 m-0 p-3'>Console</h2>
                            </div>
                            <span className='pe-3'><i className={`fa-solid ${ open[4] ? "fa-chevron-up" : "fa-chevron-down"}`}></i></span>
                        </div>
                        <div className='Sub-list border' style={{
                            maxHeight: open[4] ? "500px" : "0px",
                            overflow: "hidden", transition: "max-height 0.75s ease"}}>
                            <ul style={{padding:"16px 0 0 64px"}}>
                                <a href="#"><li className='p-2'>Portfolio</li></a>
                                <a href="#"><li className='p-2'>Corporate actions</li></a>
                                <a href="#"><li className='p-2'>Funds statement</li></a>
                                <a href="#"><li className='p-2'>Reports</li></a>
                                <a href="#"><li className='p-2'>Profile</li></a>
                                <a href="#"><li className='p-2'>Segments</li></a>
                            </ul>
                        </div>
                        
                    </div>
                    <div >
                        <div onClick={() => toggleList(5)} style={{ cursor: "pointer" }}
                                className='hover-enlarges mt-2 d-flex border align-items-center justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <img src="/images/coin.svg" style={{width:"5%"}} className='ms-3'/>
                                <h2 className='fs-5 m-0 p-3'>Coin</h2>
                            </div>
                            <span className='pe-3'><i className={`fa-solid ${ open[5] ? "fa-chevron-up" : "fa-chevron-down"}`}></i></span>
                        </div>
                        <div className='Sub-list border' style={{
                            maxHeight: open[5] ? "500px" : "0px",
                            overflow: "hidden", transition: "max-height 0.75s ease"}}>
                            <ul style={{padding:"16px 0 0 64px"}}>
                                <a href="#"><li className='p-2'>Mutual funds</li></a>
                                <a href="#"><li className='p-2'>National Pension Scheme (NPS)</li></a>
                                <a href="#"><li className='p-2'>Fixed Deposit (FD)</li></a>
                                <a href="#"><li className='p-2'>Features on Coin</li></a>
                                <a href="#"><li className='p-2'>Payments and Orders</li></a>
                                <a href="#"><li className='p-2'>General</li></a>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div className="col-4" style={{padding:"0 0 0 55px"}}>
                    <div style={{borderLeft:"8px solid #ff9100", padding:"12px 20px", backgroundColor:"#f4c54230"}}>
                        <ul style={{textDecoration:"underline", paddingLeft:"18px", color:"#387ed1",lineHeight:"1.6"}}>
                            <li className='mb-3'><a href="#">Surveillance measure on scrips - May 2026</a></li>
                            <li><a href="#">Latest Intraday leverages and Square-off timings</a></li>
                        </ul>
                    </div>
                    <div className='pt-4 pe-0' style={{width:"100%"}}>
                        <table className='border' style={{width:"100%"}}>
                            <thead>
                                <tr className='border' style={{backgroundColor:"#f6f6f6"}}>
                                    <th style={{fontSize:"16px"}}>Quick links</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='border'><th style={{fontSize:"16px"}}><a href="#">1. Track account opening</a></th></tr>
                                <tr className='border'><th style={{fontSize:"16px"}}><a href="#">2. Track segment activation</a></th></tr>
                                <tr className='border'><th style={{fontSize:"16px"}}><a href="#">3. Intraday margins</a></th></tr>
                                <tr className='border'><th style={{fontSize:"16px"}}><a href="#">4. Kite user manual</a></th></tr>
                                <tr className='border'><th style={{fontSize:"16px"}}><a href="#">5. Learn how to create a ticket</a></th></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;