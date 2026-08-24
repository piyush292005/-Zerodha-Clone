import React from "react";

function Hero() {
    return (
        <div className="container mt-5 p-5" style={{ textAlign: "center", backgroundColor: "#147adfd5", width: "100%", padding:'20px', height: "400px", textColor: "white" }}>
            <div className="row">
                <div className='col-6'>
                    <h2 style={{ color: "white", fontWeight: "bold", fontSize: "20px", marginBottom: "80px" }}>Support Portal</h2>
                    <h2 style={{ color: "white", fontWeight: "normal", fontSize: "24px",  }}> Search for ann answer or browse help topics <br />
                        to create a ticket</h2>
                        <br />
                    <div style={{ backgroundColor: "white", width: "90%", height: "50px", borderRadius: "5px", marginTop: "20px" }}>
                        < p style={{ color: "black" }}>Eg: how do i activate F&Q, why is my order getting rejected...</p>
                    </div>
                    <br />
                    <p>
                        <a href='#' style={{ color: "white" }}>
                            Track account opening
                        </a>
                        <a href='#' style={{ color: "white" }}>
                            Track segment activation
                        </a>
                        <br />
                        <a href='#' style={{ color: "white" }}>
                            Intradev margins
                        </a>
                        <a href='#' style={{ color: "white" }}>
                            kite user manual
                        </a>
                    </p>
                </div>
                <div className='col-6'>
                    <h3 style={{ color: "white", fontWeight: "bold",fontSize: "20px", marginBottom: "80px" }}> <a href='#' style={{ color: "white" }}>Track Tickets</a></h3>
                    <h2 style={{ color: "white", fontWeight: "normal", fontSize: "24px" }}>Featured</h2>
                    <ol>
                        <li><a href='#' style={{ color: "white" }}>Current Takeovers and Delsiting- January 2024</a></li>
                        <br />
                        <li><a href='#' style={{ color: "white" }}>Latest intradev coverage - MIS&CO</a></li>
                    </ol>
                </div>
            </div>

        </div>
    )
}
export default Hero;