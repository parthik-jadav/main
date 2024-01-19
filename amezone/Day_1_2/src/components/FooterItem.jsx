import React from 'react';
import FooterList from "./FooterList"

function FooterItem({title,data}) {
  return (
    <div className="w-1/4">
        <h3 className="mb-3 text-[#878787]">{title}</h3>
        <ul>
            <FooterList data={data}/>
        </ul>
    </div>
  );
}

export default FooterItem;
