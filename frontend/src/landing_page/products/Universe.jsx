import React from 'react';
import {Link} from "react-router-dom"

function Universe() {
    return ( 
        <div className="container text-center">
            <div style={{color:"#424242"}}>
                <h2 className='fs-3 mt-5 mb-4'>The Zerodha Universe</h2>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row p-5 pt-3 pb-3" style={{color:"#9b9b9b", fontSize:"13px"}}>
                <div className="col p-5 p-0">
                    <img src="\images\zerodhaFundhouse.png" className='img-hover' style={{width:"80%"}} />
                    <p className='mb-5 mt-3'>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                    <img className='mt-5 mb-3 img-hover' src="\images\streakLogo.png" style={{width:"70%"}} />
                    <p>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
                </div>
                <div className="col p-5 mt-1 pb-0">
                    <img src="\images\sensibullLogo.svg"  className='img-hover' style={{width:"85%"}} />
                    <p className='mb-5 mt-3'>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                    <img className='mt-5 mb-3 img-hover' src="\images\smallcaseLogo.png" alt=""  style={{width:"85%"}} />
                    <p>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                <div className="col p-5 pb-0">
                    <img src="/images/tijori.svg"  className='img-hover'  style={{width:"65%"}} />
                    <p className='mb-5 mt-3'>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                    <img className="mt-5 mb-3 img-hover" src="\images\dittoLogo.png" alt=""  style={{width:"60%"}} />
                    <p>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>
            </div>
            <Link to="/signup"><button className='btn btn-primary btn-lg'>Sign up for free</button></Link>
        </div>
    );
}

export default Universe;