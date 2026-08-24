import React from "react";

function CreateTicket() {
    return (
        <div className="container mt-5 p-5" style={{ textAlign: "center" }}>
            <h1 style={{marginBottom:"10px" }}> To create a ticket, select a relevant topic</h1>
            <div className="row">
                <div className='col-4' style={{marginTop:"60px"}}>
                    <h4> <i class="fa-solid fa-arrows-down-to-people"></i> Account Opening</h4>
                    <p style={{ color: "blue" }}> Online Account Opening</p>
                    <p style={{ color: "blue" }}> Offline Account Opening</p>
                    <p style={{ color: "blue" }}> Company, Paartnership and HUF Account Opening</p>
                    <p style={{ color: "blue" }}> NRI Account Opening</p>
                    <p style={{ color: "blue" }}> Charges at Zerodha</p>
                    <p style={{ color: "blue" }}> Zerodha IDFC FIRST Bank 3-in-1 Account</p>
                    <p style={{ color: "blue" }}> Getting Started
                    </p>

                </div>
                <div className='col-4' style={{marginTop:"60px"}}>
                    <h4> <i class="fa-solid fa-circle-user"></i>Your Zerodha Account</h4>
                    <p style={{ color: "blue" }}> Login Credentials </p>
                    <p style={{ color: "blue" }}> Account Modification and Segment Addition</p>
                    <p style={{ color: "blue" }}> DP ID and bank details </p>
                    <p style={{ color: "blue" }}> Your profile </p>
                    <p style={{ color: "blue" }}> Transfer and conversion of shares</p>


                </div>
                <div className='col-4' style={{marginTop:"60px"}}>
                    <h4> <i class="fa-solid fa-arrow-trend-up"></i>Your Zerodha Account</h4>
                    <p style={{ color: "blue" }}> Margin, Product and Order type</p>
                    <p style={{ color: "blue" }}> Kite Web and Mobile</p>
                    <p style={{ color: "blue" }}> Trading FAQs</p>
                    <p style={{ color: "blue" }}> Corporate Actions</p>
                    <p style={{ color: "blue" }}> Sentinel</p>
                    <p style={{ color: "blue" }}> Kite API</p>
                    <p style={{ color: "blue" }}> Pi and other platformer
                    </p>
                    <p style={{ color: "blue" }}> Stockreports</p>
                    <p style={{ color: "blue" }}> GTT</p>
                    <p style={{ color: "blue" }}> Company, Paartnership and HUF Account Opening</p>



                </div>
            </div>

           
        </div>
    )
}
export default CreateTicket;