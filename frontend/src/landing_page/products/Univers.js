import React from "react";

function UniversPage() {
    return (
        <div className="row text-center" style={{ marginTop: "50px", padding: "80px"}}>

            <h1 className="mt-5 ">The Zerodha Universe</h1> 
            <br/><br/>
            <p className="mt-3">Extend your trading and investment experience even further with our partner platforms</p>
            <div className="col-4 text-center mt-4 p-5">
                <div className="row">
                    <img src="media/images/zerodhaFundhouse.png" alt="Zerodha Fundhouse" style={{ width: "250px", height: "55px", marginLeft: "130px" }}/> <br/>
                    
                    <p> Our asset management venture<br/>
                        that is creating simple and transparent index<br/>
                        funds to help you save for your goals.</p>
                </div>
                <br/> <br/>
                <div className="row">
                    <img src="media/images/streakLogo.png" alt="Streak" style={{ width: "250px", height: "55px", marginLeft: "130px" }}/>
                    <p> Systematic trading platform<br/>
                        that allows you to create and backtest<br/>
                        strategies without coding.</p> </div>
            </div>
            <div className="col-4 text-center mt-4 p-5">
                <div className="row">
                    <img  src="media/images/sensibullLogo.svg" alt="Sensibull" style={{ width: "250px", height: "55px", marginLeft: "130px" }}/>
                    <p>Options trading platform that lets you<br/>
                        create strategies, analyze positions, and examine<br/>
                        data points like open interest, FII/DII, and more.
                    </p>
                </div>
                <br/> <br/>
                <div className="row">
                    <img  src="media/images/smallcaseLogo.png" alt="Smallcase" style={{ width: "250px", height: "55px", marginLeft: "130px" }}/>
                    <p> Thematic investing platform<br/>
                        that helps you invest in diversified<br/>
                        baskets of stocks on ETF</p>
                </div>
            </div>
            <div className="col-4 text-center mt-4 p-5">
                <div className="row">
                    <img src="https://zerodha.com/static/images/partners/tijori.svg" alt="Tijori" style={{ width: "250px", height: "55px", marginLeft: "130px" }}/>
                    <p> Investment research platform<br/>
                        that offers detailed insights on stocks,<br/>
                        sectors, supply chains, and more.
                    </p>

                </div>
                <br/> <br/>
                <div className="row">
                    <img src="media/images/dittoLogo.png" alt="Dito" style={{ width: "250px", height: "55px", marginLeft: "130px" }}/>
                    <p> Personalized advice on life<br/>
                        and health insurance. No spam<br/>
                        and no mis-selling.</p>
                </div>
            </div>
            <button className="btn btn-primary mt-5 mb-5" style={{backgroundColor: "#1786f5e4", borderColor: "#0f1923", width: "200px", textAlign: "center", marginLeft: "680px"}}>sign up for free</button>



        </div>
    );
}

export default UniversPage;