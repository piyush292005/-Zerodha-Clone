
import React from "react";

function Brokerage(){
    return (
        <div className= "container mt-5 p-5" style={{textAlign: "center"}}>
            <div className="row">
                <div className='col-12 col-md-8'>
                  <a href="#" style={{textDecoration: "none"}}>  <h1 style={{fontSize:"24px", fontWeight:"bold", textDecorationColor:"blue", padding:"10px", margin:"20px"}}>Brokerage Calculator</h1> </a>

                        <ul style={{textAlign:"left", fontSize:"18px", opacity:"70%", margin:"20px"  }}>
                            <li style={{ marginTop:"15px"}}>call & Trade and RMS auto-power . addtional charges of $50 + GST per order </li>
                            <li style={{ marginTop:"15px"}}> Digital contract rules will be send via e mail </li>
                            <li style={{ marginTop:"15px"}}> physical copies of contrats if required, shall be charged $ 20 per contract node. courier charges apply</li>
                            <li style={{ marginTop:"15px"}}> for NRI account , 0.5 % of 100 per executaion order for equally </li>
                            <li style={{ marginTop:"15px"}}> for NRI accounts, 0.5% of 200 per execution order </li>
                            <li style={{ marginTop:"15px"}}> if the account is in debut balance, any order placed will be changed 40 per executed order instend of 20 per exuted order.</li>
                        </ul>
                    


                </div>
                <div className='col-12 col-md-4'>
                    <a href="#" style={{textDecoration: "none"}}>  <h1 style={{fontSize:"24px", fontWeight:"bold", textDecorationColor:"blue", padding:"10px", margin:"20px"}}>List of Charges</h1> </a>

                </div>
                </div>
            
        </div>
    )
}
 export default Brokerage;