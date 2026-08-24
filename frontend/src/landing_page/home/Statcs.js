import React from 'react';

function Stats() {
    return (
        <div className= "container p-5">
            <div className="row p-5">
                <div className= "col-6 p-5">  
                    <h1 className='mb-5'> Trust with confidence </h1>

                    <h2 className='fs-4'> Customer-first always</h2>
                    <p className='text-muted'> That's why 1.3+ crore customers trust Zerodha with 3.5+
                        lakh crores worth of equality investments and 1.5+ lakh crores worth of derivatives trades every year.
                    </p>
                     <h2 className='fs-4'> No spam or gimmicks</h2>
                    <p className='text-muted'> No gimmicks, no hidden fees, no third-party ads, no spam calls, no email marketing. Just a simple, transparent pricing model and a great trading experience.
                    </p>
                     <h2 className='fs-4'> The Zerodha universe</h2>
                    <p className='text-muted'   > Not just a stock broker, but a complete ecosystem of products and services to help you invest and trade better. From our flagship trading platform Kite to our mutual fund platform Coin, from our educational initiative.
                    </p>
                     <h2 className='fs-4'> Do better with money</h2>
                    <p className='text-muted'> with initiatives like Varsity, our comprehensive educational platform, and Rainmatter, our open API platform for developers, we are building a universe of products and services to help you invest and trade better.
                    </p>


                </div>
                <div className= "col-6 mt-5"> 
                    <img src= "media/images/ecosystem.png" style={{ width:'85%' }} />
                  <div className='text-center'>
                    <a href='' className='mx-5' style={{ textDecoration: 'none' }}>Explore our products<i class="fa-solid fa-arrow-right"></i></a>
                    <a href='' style={{ textDecoration: 'none' }}>Try Kite<i class="fa-solid fa-arrow-right"></i></a>
                  </div>

                   </div>
            </div>
            
            
        </div>
    );
}

export default Stats;