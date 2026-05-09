import React, { useState } from "react";

function Tables() {
    const [activeTable, setActiveTable] = useState("equity");
    return (
        <div className="container pt-3 mt-5" style={{ color: "#424242" }}>
            <div>
                <nav className="nav nav-tabs border-bottom mb-4">
                    <a href="#" className={`tab ${activeTable === "equity" ? "active" : ""}`}
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveTable("equity");
                        }}>Equity</a>
                    <a href="#" className={`tab ${activeTable === "currency" ? "active" : ""}`}
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveTable("currency");
                        }}>Currency</a>
                    <a href="#" className={`tab ${activeTable === "commodity" ? "active" : ""}`}
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveTable("commodity");
                        }}>Commodity</a>
                </nav>
                {activeTable === "equity" && (
                        <table style={{ width: "100%" }} className="border">
                            <thead>
                                <tr className="border-bottom">
                                    <th> </th>
                                    <th>Equity delivery</th>
                                    <th>Equity intraday</th>
                                    <th>F&O - Futures</th>
                                    <th>F&O - Options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ fontSize: "14.5px" }}>Brokerage</td>
                                    <td>Zero Brokerage</td>
                                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                    <td>Flat Rs. 20 per executed order</td>
                                </tr>
                                <tr className="grey-back">
                                    <td style={{ fontSize: "14.5px" }}>STT/CTT</td>
                                    <td>0.1% on buy & sell</td>
                                    <td>0.025% on the sell side</td>
                                    <td>0.05% on the sell side</td>
                                    <td><ul>
                                        <li>0.15% of the intrinsic value on options that are bought and exercised</li>
                                        <li className="mt-1">0.15% on sell side (on premium)</li>
                                    </ul></td>
                                </tr>

                                <tr>
                                    <td style={{ fontSize: "14.5px" }}>Transaction charges</td>
                                    <td>NSE: 0.00307%<br />BSE: 0.00375%</td>
                                    <td>NSE: 0.00307%<br />BSE: 0.00375%</td>
                                    <td>NSE: 0.00183%<br />BSE: 0</td>
                                    <td>NSE: 0.03553% (on premium)<br />BSE: 0.0325% (on premium)</td>
                                </tr>
                                <tr className="grey-back">
                                    <td style={{ fontSize: "14.5px" }}>GST</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr>
                                    <td style={{ fontSize: "14.5px" }}>SEBI charges</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                </tr>
                                <tr className="grey-back">
                                    <td style={{ fontSize: "14.5px" }}>Stamp charges</td>
                                    <td>0.015% or ₹1500 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                    <td>0.002% or ₹200 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                )}
                {activeTable === "currency" && (
                        <table style={{ width: "100%" }} className="border">
                            <thead>
                                <tr className="border-bottom">
                                    <th> </th>
                                    <th>Currency futures</th>
                                    <th>Currency options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ fontSize: "14.5px" }}>Brokerage</td>
                                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                    <td>₹ 20/executed order</td>
                                </tr>
                                <tr className="grey-back">
                                    <td style={{ fontSize: "14.5px" }}>STT/CTT</td>
                                    <td>No STT</td>
                                    <td>No STT</td>
                                </tr>

                                <tr>
                                    <td style={{ fontSize: "14.5px" }}>Transaction charges</td>
                                    <td>NSE: 0.00035%<br />BSE: 0.00045%</td>
                                    <td>NSE: 0.0311%<br />BSE: 0.001%</td>
                                </tr>
                                <tr className="grey-back">
                                    <td style={{ fontSize: "14.5px" }}>GST</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr>
                                    <td style={{ fontSize: "14.5px" }}>SEBI charges</td>
                                    <td>₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                </tr>
                                <tr className="grey-back">
                                    <td style={{ fontSize: "14.5px" }}>Stamp charges</td>
                                    <td>0.0001% or ₹10 / crore on buy side</td>
                                    <td>0.0001% or ₹10 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                )}
                {activeTable === "commodity" && (
                        <table style={{ width: "100%" }} className="border">
                            <thead>
                                <tr className="border-bottom">
                                    <th> </th>
                                    <th>Commodity futures</th>
                                    <th>Commodity options</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ fontSize: "14.5px" }}>Brokerage</td>
                                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                                    <td>₹ 20/executed order</td>
                                </tr>
                                <tr className="grey-back">
                                    <td style={{ fontSize: "14.5px" }}>STT/CTT</td>
                                    <td>0.01% on sell side (Non-Agri)</td>
                                    <td>0.05% on sell side</td>
                                </tr>
                                <tr>
                                    <td style={{ fontSize: "14.5px" }}>Kite Connect</td>
                                    <td>Monthly</td>
                                    <td>Connect: 500 | Personal: Free</td>
                                </tr>
                                <tr className="grey-back">
                                    <td style={{ fontSize: "14.5px" }}>Transaction charges</td>
                                    <td>MCX: 0.0021%<br />NSE: 0.0001%</td>
                                    <td>MCX: 0.0418%<br />NSE: 0.001%</td>
                                </tr>
                                <tr>
                                    <td style={{ fontSize: "14.5px" }}>GST</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                    <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                                </tr>
                                <tr className="grey-back">
                                    <td style={{ fontSize: "14.5px" }}>Kite Connect</td>
                                    <td>Monthly</td>
                                    <td>Connect: 500 | Personal: Free</td>
                                </tr>
                                <tr>
                                    <td style={{ fontSize: "14.5px" }}>SEBI charges</td>
                                    <td><strong>Agri:</strong><br />₹1 / crore<br /><strong>Non-agri:</strong><br />₹10 / crore</td>
                                    <td>₹10 / crore</td>
                                </tr>
                                <tr className="grey-back">
                                    <td style={{ fontSize: "14.5px" }}>Stamp charges</td>
                                    <td>0.002% or ₹200 / crore on buy side</td>
                                    <td>0.003% or ₹300 / crore on buy side</td>
                                </tr>
                            </tbody>
                        </table>
                )}
            </div>
            <p className="text-center fs-5 mt-4 pt-2"><a href="">Calculate your costs upfront</a> using our brokerage calculator</p>

            <div style={{ padding: "80px 20px 0" }}>
                <h2 style={{ fontSize: "25px", marginBottom: "25px" }}>Charges for account opening</h2>
                <table style={{ width: "100%" }} className="border">
                    <thead>
                        <tr className="border-bottom">
                            <th> Type of account</th>
                            <th style={{ textAlign: "center" }}>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Online account</td>
                            <td style={{ textAlign: "center" }}><span className="free-tag">FREE</span></td>
                        </tr>
                        <tr>
                            <td>Offline account</td>
                            <td style={{ textAlign: "center" }}><span className="free-tag">FREE</span></td>
                        </tr>
                        <tr>
                            <td>NRI account (offline only)</td>
                            <td style={{ textAlign: "center" }}>₹500</td>
                        </tr>
                        <tr>
                            <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                            <td style={{ textAlign: "center" }}>₹500</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div style={{ padding: "80px 20px 0" }}>
                <h2 style={{ fontSize: "25px", marginBottom: "25px" }}>Demat AMC (Annual Maintenance Charge)</h2>
                <table style={{ width: "100%" }} className="border">
                    <thead>
                        <tr className="border-bottom">
                            <th>Value of holdings</th>
                            <th>AMC</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Up to ₹4 lakh</td>
                            <td><span className="free-tag">FREE*</span></td>
                        </tr>
                        <tr>
                            <td>₹4 lakh - ₹10 lakh</td>
                            <td>₹ 100 per year, charged quarterly*</td>
                        </tr>
                        <tr>
                            <td>Above ₹10 lakh</td>
                            <td>₹ 300 per year, charged quarterly</td>
                        </tr>
                    </tbody>
                </table>
                <p style={{ fontSize: "12px", marginTop: "10px" }}>* Lower AMC is applicable only if the account qualifies as a Basic Services Demat Account (BSDA). BSDA account holders cannot hold more than one demat account. To learn more about BSDA, <a href="#">click here.</a></p>
            </div>

            <div style={{ padding: "80px 20px 0" }}>
                <h2 style={{ fontSize: "25px", marginBottom: "25px" }}>Charges for optional value added services</h2>
                <table style={{ width: "100%" }} className="border">
                    <thead>
                        <tr className="border-bottom">
                            <th>Service</th>
                            <th>Billing Frequency</th>
                            <th>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tickertape</td>
                            <td>Monthly / Annual</td>
                            <td>Free: 0 | Pro: 249/2399</td>
                        </tr>
                        <tr>
                            <td>Smallcase</td>
                            <td>Per transaction</td>
                            <td>Buy & Invest More: 100 | SIP: 10</td>
                        </tr>
                        <tr>
                            <td>Kite Connect</td>
                            <td>Monthly</td>
                            <td>Connect: 500 | Personal: Free</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Tables;
