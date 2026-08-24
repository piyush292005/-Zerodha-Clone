import React from 'react';
import {Link} from 'react-router-dom';
function Navbar() {
    return (
        <div className='container' style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999, backgroundColor: 'light', width: '150%'}}>
           
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',  width: '100%'}}>
                <div className='row'>
                    <div className='col-6'>
                <img src="media/images/logo.svg" alt="Logo" className="navbar-logo" style={{width: '40%', height: 'auto'}} />
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">        
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
                
                
                <div className='col-6' style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}> 
                <div className="collapse navbar-collapse" id="navbarNav" >
                    <ul className="navbar-nav  mr-5">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/signup">
                                Sign up
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                about
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product">
                                Product
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">
                                Pricing
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/support">
                                Support
                            </Link>
                        </li>
                    </ul>
                </div>
                </div>
                </div>
                
            </nav>
            
            
        </div>
    );
}

export default Navbar;