import React from 'react';
import {Link} from "react-router-dom"

function Pricing() {
    return (
        <div className="container"><div className="row ">
            <div className="col-5">
                <h2 className='mb-4 fs-4'>Unbeatable pricing</h2>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
            </div>
            <div className="col-7 p-0 pt-4">
                <div className="row d-flex" style={{fontSize:"10px", color:"#666"}}>
                    <div className="col-4 p-0 d-flex align-items-center">
                        <img src="\images\pricingMF.svg" alt="" style={{width:"60%", padding:"0"}}/>
                        <p>Free account opening</p>
                    </div>
                    <div className="col-5 d-flex p-0 pe-3 align-items-center">
                        <img src="\images\pricingMF.svg" alt="" style={{width:"48%", padding:"0"}} />
                        <p>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className="col-3 d-flex p-0 align-items-center">
                        <img src="\images\pricingEquity.svg" alt="" style={{width:"70%", padding:"0"}} />
                        <p>Intraday and F&O</p>
                    </div>
                </div>
                </div>
                <Link to="/pricing"><a style={{fontWeight:"500"}}>See Pricing <i class="fa-solid fa-arrow-right-long"></i></a></Link>
            </div></div>
    );
}

export default Pricing;