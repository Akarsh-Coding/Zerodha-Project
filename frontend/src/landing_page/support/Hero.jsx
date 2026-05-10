import React from 'react';

function Hero() {
    return ( 
        <div style={{backgroundColor:"#f6f6f6", padding:"40px 24px"}}>
            <div className='d-flex justify-content-between align-items-center pb-4 mb-2'>
                <a href="#"><p style={{fontSize:"32.5px", color:"#424242", fontWeight:"600", margin:"0"}}>Support Portal</p></a>
                <a href=""><span className='text-center' style={{backgroundColor:"#397dd0", color:"#fff", borderRadius:"4px", fontWeight:"500", padding:"10px 16px", fontSize:"17px" }}> My Tickets</span></a>
            </div>
            <div className='d-flex gap-2' style={{backgroundColor:"#fff", border:"1px solid #e0e7ef", borderRadius:"4px",}}>
                <span className='d-flex align-items-center ps-3' style={{color:"#666"}}><i class="fa-solid fa-magnifying-glass"></i></span>
                <input type="search" placeholder='Eg: How do I open my account, How do i activate F&O..' style={{width:"100%", color:"#424242", fontSize:"16px", padding:"16px 4px", border:"0"}} />
            </div>
        </div>
    );
}

export default Hero;