import React from 'react';

function Education() {
    return (
        <div>
            <div className= "container p-5">
                <div className= "row">
                    
                    <div className= "col-6">
                        <img src="media/images/education.svg" alt="Education" className='img-fluid'></img>
                    </div>
                    <div className= "col-6 mt-5">
                        <h1 className='mb-3'> Free And Open Market Education </h1>
                        <p> Versity, the largest online stock market education book in the world covering everything from the basics to advancede treading .
                        </p>
                        <a href='' style={{ textDecoration: 'none' }}>See pricing<i class="fa-solid fa-arrow-right"></i></a>
                        
                        <p className= "mt-5"> 
                            TradingQ&A, the most active trading and investment community inn india for all your market related quries.
                        </p>
                        <a href='' style={{ textDecoration: 'none' }}>TradingQ&A<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}
export default Education;