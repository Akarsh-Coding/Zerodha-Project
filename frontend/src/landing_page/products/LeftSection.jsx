import React from 'react';

function LeftSection({imgURL, height, productName, productDescription, tryDemoText, tryDemoURL, learnMoreText, learnMoreURL, G_Play, A_Store}) {
    return ( 
        <div className="container">
            <div className="row" style={{height:"500px"}}>
                <div className="col-7 p-5">
                    <img className='img-hover' src={imgURL} style={{width:"100%", height:height || "auto"}} />
                </div>
                <div className="col"></div>
                <div className="col-4 pt-5" style={{color:"#424242", marginTop:"55px"}}>
                    <h1 className='fs-3 mb-4'>{productName}</h1>
                    <p style={{lineHeight:"1.75", fontSize:"16.5px"}}>{productDescription}</p>
                    <div className='mt-4 mb-4 d-flex gap-5'>
                        <a style={{fontWeight:"500"}} href={tryDemoURL}>{tryDemoText}</a>
                        <a style={{fontWeight:"500"}} href={learnMoreURL}>{learnMoreText}</a>
                    </div>
                    <div className=' mt-0 d-flex gap-3'>
                        <a href={G_Play}><img src="/images/googlePlayBadge.svg" alt="Play Store" /></a>
                        <a href={A_Store}><img src="/images/appstoreBadge.svg" alt="App Store" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;