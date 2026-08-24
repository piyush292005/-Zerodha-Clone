import React from "react";
import { Link } from "@mui/material";

function Team() {
    return (

        <div className="row p-5 mt-5 border-top">
            <h1 className="fs-3 text-center mb-5"> PEOPLE</h1>
            <div className="col-6 mb-5 text-center">
                <img src=" /media/images/nithinKamath.jpg" style={{ borderRadius: '50%', height: '250px', width: '40%', marginLeft: '300px' }} />
                <h2 style={{marginLeft: '300px'}}>Nithin Kamath</h2>
                <h4 style={{marginLeft: '300px'}}>Founder, CEO</h4>
            </div>
            <div className="col-6">
                <p>
                    Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.<br/><br/>

                    He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).<br/><br/>

                    Playing basketball is his zen.<br/><br/>

                    Connect on <li> Homepage</li> / <li> TradingQnA </li> / <li>Twitter</li>
                </p>
            </div>
        </div>
    )
}
export default Team;