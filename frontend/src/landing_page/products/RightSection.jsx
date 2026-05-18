import React from 'react';

function RightSection({imgURL, padding, productName, productDescription, learnMoreText, learnMoreURL}) {
    return ( 
        <div className="container">
            <div className="row" style={{height:"580px"}} >
                <div className="col-4" style={{color:"#424242", paddingTop:padding}}>
                    <h1 className='fs-3 mb-4'>{productName}</h1>
                    <p style={{lineHeight:"1.75", fontSize:"16.75px"}}>{productDescription}</p>
                    <a style={{fontWeight:"500"}} href={learnMoreURL}>{learnMoreText}</a>
                </div>
                <div className="col"></div>
                <div className="col-7 p-5">
                    <img className='img-hover' src={imgURL} style={{width:"100%",}} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;