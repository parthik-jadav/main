import React from 'react';

const MobileItem = ({arr}) =>{
 return (<>
 {
    arr.map((val,ind)=>{
    return (
        <div key={ind} className="mobile-card w-[200px] text-center m-3 p-4 pb-[5px] border-[#e0e0e0] rounded border">
            <img src={val.src} alt="" />
            <h3 className="mt-2 text-[14px]">{val.title}</h3>
            <h4 className="font-semibold text-[14px]">incl of offers</h4>
        </div>
    )
    })
 }
 </>)
}

export default MobileItem;