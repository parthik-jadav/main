import React from 'react';
import BestMobileItem from "./BestMobileItem";
import Mobileheader from "./BestMobileHead";


const BestMobile = ({MobileData,title}) =>{
 return(
     <div className="bestMobile-wraperr mt-[15px]">
         <div className="container mx-auto bg-white">
             <div className="row">
                <Mobileheader title={title}/>
                <div className="mobile-container flex">
                <BestMobileItem arr={MobileData}></BestMobileItem>
                </div>
             </div>
         </div>
     </div>
    )
}

export default BestMobile;