import React from 'react';

function TopSaleItem() {
    let arr = [{
        src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/38a459d6d1fc930a.png?q=100",
        name: "Mobiles & Tablets",
    },
    {
        src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/629b0a6f61037ae6.png?q=100",
        name: "TVs & Electronics"
    },
    {
        src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/f2802fac96dffea9.png?q=100",
        name: "Appliances"
    },
    {
        src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/74f0eb6cc10e2743.png?q=100",
        name: "Fashion"
    },
    {
        src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/f925cfe5ecdf6acf.png?q=100",
        name: "Beauty"
    },
    {
        src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/38d4fbb64c70a3ff.png?q=100",
        name: "Home & Kitchen"
    }, {
        src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/fef14e08ec83a6d7.png?q=100",
        name: "Furniture"
    }, {
        src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/83de409bda2f3834.png?q=100",
        name: "Flights"
    }, {
        src: "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/711174cfe1d2fa75.png?q=100",
        name: "Grocery"
    }
    ]

    return (<>
        {arr.map((item,ind) => {
            return (<div key={ind} className="image-con p-[16px] min-w-[125px] text-center">
                <img src={item.src} className="mb-[12px] mx-auto" alt="" />
                <p className="text-[14px] text-center font-semibold">{item.name}</p>
            </div>);
        })}
    </>)
}

export default TopSaleItem;