import React from "react"

const DaySaleItem=({arr})=>{
 return (
    arr.map((val,ind)=>
    <div key={ind} className="DayCard w-1/3 mx-1 bg-red-500">
      <img src={val}/>
    </div>
    )
 )
}

export default DaySaleItem;