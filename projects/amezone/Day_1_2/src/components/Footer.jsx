import React from 'react';
import FooterItem from './FooterItem'

function Footer() {
  let about = ['Careers','Contact Us','About Us','Flipkart Stories','Press','Flipkart Wholesale','Corporate Information','Cleartrip']
  let contactUs = ['Payments','Shipping','Cancellation & Returns','FAQ','Report Infringement']
  let Privecy_Policy = ['Cancellation & Returns','Terms Of Use',' Security','Privacy ','Sitemap']
  let Disclamer = ['Facebook','Twitter','YouTube']

  return (
    <div className="footer-container bg-[#212121] p-5 mt-5">
    <div className="container mx-auto">
     <div className="row flex">
     <FooterItem title="About" data={about}/>
     <FooterItem title="Contact Us" data={contactUs}/>
     <FooterItem title="Privecy Policy" data={Privecy_Policy}/>
     <FooterItem title="Disclamer" data={Disclamer}/>
     </div>
     </div>
    </div>
  );
}

export default Footer;
