import React from 'react';

const FooterList = ({data}) => {
  return (
    <div>
    {data.map((val,ind)=> <li key={ind} className="text-[white]">{val}</li>)}
    </div>
  );
}

export default FooterList;
