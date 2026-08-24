import React from 'react';

function Footer() {
    return (
        <div clasName="container border-top mt-5 bg-lightgray" style={{ padding: '120px', backgroundColor: '#f8f9fad2', marginTop: '50px', fontSize: '14px' }}>
            <div className='row'>
                <div className='col'>
                    <img src="media/images/logo.svg" alt='Zerodha Logo' style={{ width: "50%" }} />
                    <p> &copy; 2010 - 2024 , Not Zerodha Broking Ltd. All rights reserved. </p>
                </div>
                <div className='col'>
                    <h3>Company</h3>
                    <a href="#" style={{ textDecoration: 'none', color: 'black' }} className="mt-2">About</a> <br />
                    <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Products</a> <br />
                    <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Pricing</a> <br />
                    <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Referral programme</a> <br />
                    <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Careers</a> <br />
                    <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Zerodha.tech</a> <br />
                    <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Press & media</a> <br />
                    <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Zerodha cares (CSR)</a> <br />

                </div>
                <div className='col'>
                    <h3>Support</h3>
                    <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Support portal</a> <br />
                    <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Z-Connect blog</a> <br />
                    <a href="#" style={{ textDecoration: 'none', color: 'black' }}>List of charges</a> <br />
                    <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Downloads & resources</a> <br />
                </div>
                <div className='col'>
                    <h3>Accounts</h3>
                    <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Open an account</a> <br />
                    <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Fund transfer</a> <br />
                    <a href="#" style={{ textDecoration: 'none', color: 'black' }}>60 day challenge</a> <br />

                </div>
            </div>


            <div className='row mt-5 text-small text-muted'>
                <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

                <p><strong>Attention investors:</strong> 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

                <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. 
                  <p> Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors.</p>
                    <p>KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.</p>
                     <p>Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. </p>
                     In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
                
                <p><strong>Disclaimer:</strong> *Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>

                <p>Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).</p>

                <p>NSE BSE MCX MSEI Terms & conditions Policies & procedures Privacy policy Disclosure For investor's attention Investor charter Sitemap</p>

            </div>
        </div>

    );
}

export default Footer;