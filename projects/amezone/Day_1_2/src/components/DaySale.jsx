import React from 'react'
import DaySaleItem from './DaySaleItem'

const DaySale = ({imgArr})=>{
 return (
    <div className="container flex mx-auto flex wrap my-[15px]">
    <DaySaleItem arr={imgArr}></DaySaleItem>
    <input type="text" />
    </div>
    );
}

export default DaySale;