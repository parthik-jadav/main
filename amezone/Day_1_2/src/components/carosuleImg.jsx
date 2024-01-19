import React from 'react';

const CarosuleImg = () => {
    let arr = ["https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/eb64347ca9e81b7e.jpg?q=20",
        "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/909a32737b6d03e0.jpg?q=20",
        "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/98c5bff5ba33a77f.jpeg?q=20",
        "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/60c8b0e070db8e63.jpg?q=20",
        "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/bdb7cb45624af024.jpg?q=20"]
 return (<>
     {
        arr.map((val,ind)=>  (
            <div key={val} className="hidden  duration-700 ease-in-out" data-carousel-item>
                <img key={ind} src={val} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            )
        )
     }
 </>)
}

export default CarosuleImg;