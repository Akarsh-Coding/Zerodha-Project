import React from 'react';
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer style={{backgroundColor:"#fbfbfb"}}>
        <div className="container border-top mt-5 p-0" >
            <div className="row mt-5 p-0">
                <div className="col-3">
                    <img src="/images/logo.svg" alt="Logo" style={{width:"60%"}}/>
                    <p style={{fontSize:"13px"}} className='text-muted mt-3'> &copy; 2010 - 2024, Not Zerodha Broking Ltd. <br /> All rights reserved.</p>
                    <div className='text-muted' style={{fontSize:"20px"}}>
                        <div className='d-flex gap-3 mb-4 parent'>
                            <i class="fa-brands fa-x-twitter"></i>
                            <i class="fa-brands fa-square-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin-in"></i>
                        </div>
                        <hr />
                        <div className='d-flex gap-3 mt-4 mb-4 parent'>
                            <i class="fa-brands fa-youtube"></i>
                            <i class="fa-brands fa-whatsapp"></i>
                            <i class="fa-brands fa-telegram"></i>
                        </div>
                        <div className='d-flex gap-3 pt-3'>
                            <a href="https://play.google.com/store/apps/details?id=com.zerodha.kite3"><img src="\images\googlePlayBadge-light.svg" alt="" style={{width:"95%"}}/></a>
                            <a href="https://apps.apple.com/in/app/kite-zerodha/id1449453802"><img src="\images\appstoreBadge-light.svg" alt="" style={{width:"90%"}} /></a>
                        </div>
                    </div>
                </div>
                <div className="col text-muted parent">
                    <p style={{fontSize:"18px", fontWeight:"500", marginBottom:"8px", color:"#424242"}}>Account</p>
                    <div style={{lineHeight:"2.5", fontSize:"15px"}}>
                        <Link to="/signup"><a>Open demat account</a></Link><br />
                        <a href="#">Minor demat account</a><br />
                        <a href="#">NRI demat account</a><br />
                        <a href="#">HUF demat account</a><br />
                        <a href="#">Commodity</a><br />
                        <a href="#">Dematerialisation</a><br />
                        <a href="#">Fund transfer</a><br />
                        <a href="#">MTF</a><br />
                    </div>
                </div>
                <div className="col text-muted parent">
                    <p style={{fontSize:"18px", fontWeight:"500", marginBottom:"8px", color:"#424242"}}>Support</p>
                    <div style={{lineHeight:"2.5", fontSize:"15px"}}>
                        <a href="#">Contact us</a><br/>
                        <Link to="/support"><a>Support portal</a></Link><br/>
                        <a href="#">How to file a complaint?</a><br/>
                        <a href="#">Status of your complaints</a><br/>
                        <a href="#">Bulletin</a><br/>
                        <a href="#">Circular</a><br/>
                        <a href="#">Z-Connect blog</a><br/>
                        <a href="#">Downloads</a><br/>
                    </div>
                </div>
                <div className="col text-muted parent">
                    <p style={{fontSize:"18px", fontWeight:"500", marginBottom:"8px", color:"#424242"}}>Company</p>
                    <div style={{lineHeight:"2.5", fontSize:"15px"}}>
                        <Link to="/about"><a>About</a></Link><br/>
                        <a href="#">Philosophy</a><br/>
                        <a href="#">Press & media</a><br/>
                        <a href="#">Careers</a><br/>
                        <a href="#">Zerodha cares (CSR)</a><br/>
                        <a href="#">Zerodha.tech</a><br/>
                        <a href="#">Open source</a><br/>
                        <a href="#">Referral programme</a><br/>
                    </div>
                </div>
                <div className="col text-muted parent">
                    <p style={{fontSize:"18px", fontWeight:"500", marginBottom:"8px", color:"#424242"}}>Quick links</p>
                    <div style={{lineHeight:"2.5", fontSize:"15px"}}>
                        <a href="#">Upcoming IPOs</a><br />
                        <a href="#">Brokerage charges</a><br />
                        <a href="#">Market holidays</a><br />
                        <a href="#">Economic calendar</a><br />
                        <a href="#">Calculators</a><br />
                        <a href="#">Markets</a><br />
                        <a href="#">Sectors</a><br />
                        <a href="#">Gift Nifty</a><br />
                    </div>
                </div>
            </div>
            <div className='mt-5 text-muted' style={{fontSize:"11px"}}>
                <p>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="#" style={{fontWeight:"600"}}>complaints@zerodha.com</a>, for DP related to <a href="#" style={{fontWeight:"600"}}>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                <p>Procedure to file a complaint on <a href="#" style={{fontWeight:"600"}}></a>SEBI SCORES:<a/> Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                <p><a href="#" style={{fontWeight:"600"}}>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a></p>
                <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                <p>India's largest broker based on networth as per NSE. <a href="#" style={{fontWeight:"600"}}>NSE broker factsheet</a></p>
                <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="#" style={{fontWeight:"600"}}>create a ticket here.</a></p>
                <p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>
                <p>Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).</p>
            </div>
            <div className='parent d-flex justify-content-center gap-4 p-2 mb-2' style={{color:"#9b9b9b", fontSize:"13px", fontWeight:"500"}}>
                <a href="#">NSE</a>
                <a href="#">BSE</a>
                <a href="#">MCX</a>
                <a href="#">Terms & conditions</a>
                <a href="#">Policies & procedures</a>
                <a href="#">Privacy policy</a>
                <a href="#">Disclosure</a>
                <a href="#">For investor's attention</a>
                <a href="#">Investor charter</a>
            </div>
        </div></footer>
    );
}

export default Footer;