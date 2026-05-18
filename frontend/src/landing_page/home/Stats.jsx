import React from 'react';
import {Link} from "react-router-dom"


function Stats() {
    return ( 
    <div className="container">
        <div className="row">
            <div className="col-5 p-5 ps-3" style={{lineHeight:"1.75", color:"#424242"}}>
                <h2 className='mb-5 fs-4'>Trust with confidence</h2>
                <h3 className='fs-5'>Customer-first always</h3>
                <p className='text-muted mb-4'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                <h3 className='fs-5'>No spam or gimmicks</h3>
                <p className='text-muted mb-4'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="https://zerodha.com/about/philosophy" style={{fontWeight:500}}>Our philosophies.</a></p>
                <h3 className='fs-5'>The Zerodha universe</h3>
                <p className='text-muted mb-4'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                <h3 className='fs-5'>Do better with money</h3>
                <p className='text-muted mb-4'>With initiatives like <a href="https://support.zerodha.com/category/trading-and-markets/kite-features/nudges/articles/what-is-nudge" style={{fontWeight:500}}>Nudge</a> and <a href="https://support.zerodha.com/category/console/profile/killswitch/articles/what-is-the-kill-switch" style={{fontWeight:500}}>Kill Switch,</a> we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className="col-7 p-3 mt-4">
                <Link  to="/product"><img src="/images/ecosystem.png" alt="" style={{width:"99%"}}/></Link>
                <div className='text-center mt-3'>
                    <Link to="/product"><a className='mx-5' style={{fontWeight:500}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a></Link>
                    <a href="https://kite-demo.zerodha.com/"  style={{fontWeight:500}}>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
            <div className='d-flex justify-content-center p-0'>
                <a className='img-hover' href="https://zerodha.com/media"><img src="/images/pressLogos.png" alt="" style={{width:"95%", }}/></a>
            </div>
        </div>
    </div>
    );
}

export default Stats;