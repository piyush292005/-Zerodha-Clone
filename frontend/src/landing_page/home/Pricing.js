import React from 'react';

function Pricing() {
    return (
        <div>
            <div className= "container p-5">
                <div className= "row">
                    <div className= "col-4">
                        <h1 className='mb-3'> Unbeatable Pricing </h1>
                        <p> We pinored the concept of discount broking and price transparency 
                            in India. flat fees and no hidden charges.
                        </p>
                        <a href='' style={{ textDecoration: 'none' }}>See pricing<i class="fa-solid fa-arrow-right"></i></a>
                  
                    </div>
                    <div className= "col-3"></div>
                    <div className= "col-5">
                        <div className='row text-center'>
                            <div className='col border fa-rod-asclepius box shadow '>
                                <h1 className='mb-4 mt-4'><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                                <p>Free equity delivery and 
                                    direct mutual funds
                                </p>
                            </div>
                            <div className='col border fa-rod-asclepius box shadow'>
                                <h1 className='mb-4 mt-4'><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                                <p>Intraday and F&o
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Pricing;