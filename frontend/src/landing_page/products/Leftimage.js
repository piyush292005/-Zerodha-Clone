import React from "react";

function Leftimage() {
    return (
        <div className="container mt-5 text-center" style={{ padding: "50px"}}>
            <div className="row" style={{ marginTop: "50px"}}>
                <div className="col-md-6" >
                    <img src="media/images/kite.png" alt="Zerodha Universe" className="img-fluid" style={{height: "350px"}} />

                </div>
                <div className="col-md-6">

                    <h1 className="mb-4" style={{ marginTop: "70px"}}>Kite</h1>
                    <p className="mb-4" style={{ marginTop: "20px"}}>Our ultra-fast flagship trading platform with streaming market data, <br/>advanced charts,<br />an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.
                         <br/>
                       <a href="#" style={{textDecoration:'none', marginRight: "90px"}} >Try demo</a> 
                       
                        <a href="#" style={{textDecoration:'none'}} >Learn more</a>
                        <br/>
                    <a href="www.google.com">    <img src="https://zerodha.com/static/images/google-play-badge.svg" alt="Zerodha Universe" className="img-fluid" style={{height: "50px", marginRight: "30px", marginTop: "20px"}} /> </a>
                       <a href="www.apple.com"> <img src="https://zerodha.com/static/images/appstore-badge.svg" alt="Zerodha Universe" className="img-fluid" style={{height: "50px", marginTop: "20px"}} /> </a>
                    </p>
                </div>
            </div>

            <div className="row" style={{ marginTop: "50px"}}>
                <div className="col-md-6">
                    <h1 className="mb-4" style={{ marginTop: "230px"}}>Console</h1>
                    <p className="mb-4" style={{ marginTop: "20px"}}>Console
                        The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.
                         <br/>
                       <a href="#" style={{textDecoration:'none'}} >Learn more</a>
                    </p>

                </div>
                <div className="col-md-6">

                    <img src="media/images/console.png" alt="Zerodha Universe" className="img-fluid" />
                </div>
            </div>

            <div className="row" style={{ marginTop: "50px"}}>
                <div className="col-md-6">
                    <img src="media/images/coin.png" alt="Zerodha Universe" className="img-fluid" />

                </div>
                <div className="col-md-6">

                    <h1 className="mb-4" style={{ marginTop: "70px"}}>Coin</h1>
                    <p className="mb-4" style={{ marginTop: "20px"}}>Coin
                        Buy direct mutual funds online, <br/>commission-free, delivered directly to your Demat account. <br/> Enjoy the investment experience on your Android and iOS devices.
                        <br/>
                      <a href="#" style={{textDecoration:'none'}} >Coin</a>   
                          <br/>
                    <a href="www.google.com">    <img src="https://zerodha.com/static/images/google-play-badge.svg" alt="Zerodha Universe" className="img-fluid" style={{height: "50px", marginRight: "30px", marginTop: "20px"}} /> </a>
                       <a href="www.apple.com"> <img src="https://zerodha.com/static/images/appstore-badge.svg" alt="Zerodha Universe" className="img-fluid" style={{height: "50px", marginTop: "20px"}} /> </a>
                        </p>
                </div>
            </div>

            <div className="row" style={{ marginTop: "150px"}}>
                <div className="col-md-6">
                    <h1 className="mb-4" style={{ marginTop: "90px"}}>Kite Connect</h1>
                    <p className="mb-4" style={{ marginTop: "20px"}}>Kite Connect API
                        Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.
                          

                          <br/>
                       <a href="#" style={{textDecoration:'none'}} >Kite Connect</a>
                        
                         </p>


                </div>
                <div className="col-md-6">

                    <img src="https://zerodha.com/static/images/kite-trade/landing.svg" alt="Zerodha Universe" className="img-fluid" />
                </div>
            </div>

            <div className="row" style={{ marginTop: "150px"}}>
                <div className="col-md-6">
                    <img src="https://zerodha.com/static/images/varsity-products.svg" alt="Zerodha Universe" className="img-fluid" />

                </div>
                <div className="col-md-6">

                    <h1 className="mb-4" style={{ marginTop: "70px"}}>Varsity</h1>
                    <p className="mb-4" style={{ marginTop: "20px"}}>Varsity mobile
                        An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.

                    </p>
                        <br/>
                    <a href="www.google.com">    <img src="https://zerodha.com/static/images/google-play-badge.svg" alt="Zerodha Universe" className="img-fluid" style={{height: "50px", marginRight: "30px", marginTop: "20px"}} /> </a>
                       <a href="www.apple.com"> <img src="https://zerodha.com/static/images/appstore-badge.svg" alt="Zerodha Universe" className="img-fluid" style={{height: "50px", marginTop: "20px"}} /> </a>
                </div>
            </div>

            <h1 style={{fontSize:'30px', marginTop: "80px"}}>Want to know more about our technology stack? Check out the <a href="https://zerodha.tech" style={{ textDecoration: 'none' }}>Zerodha.tech </a>blog.</h1>


        </div>
    );
}

export default Leftimage;