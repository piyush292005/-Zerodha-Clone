import React from "react";

function Hero(){
    return (
        <div className= "container mt-5 p-5" style={{textAlign: "center"}}>
            <div className="row">
                <h1 style={{ fontSize: "30px" }}>Charges</h1>
                <h3 style={{fontSize:"20px", opacity:"45%"}}>List of all charges and taxes</h3>
                <div className="col-4" style={{marginTop:"70px" , padding:"60px"}}>
                   <img src=" media/images/pricing0.svg"/>
                   <h1 style={{ fontSize: "24px" }}> Free equity delivery </h1>
                   <h3 style={{ fontSize: "16px", opacity: "70%" }}> All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage. </h3>
                </div>
                <div className="col-4" style={{marginTop:"70px" , padding:"60px"}}>
                   <img src="https://zerodha.com/static/images/other-trades.svg" />
                   <h1 style={{ fontSize: "24px" }}> Intraday and F&O trades </h1>
                   <h3 style={{ fontSize: "16px", opacity: "70%" }}> Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, <br/>
                    currency, and commodity trades. Flat ₹20 on all option trades. </h3>
                </div>
                <div className="col-4" style={{marginTop:"70px" , padding:"60px"}}>
                   <img src=" media/images/pricing0.svg"/>
                   <h1 style={{ fontSize: "24px" }}>Free direct MF</h1>
                   <h3 style={{ fontSize: "16px", opacity: "70%" }}>All direct mutual fund investments are <br/> absolutely free — ₹ 0 commissions & DP charges.</h3>
                </div>
            </div>
            
        </div>
    )
}
 export default Hero;
              