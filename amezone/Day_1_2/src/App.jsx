import React from "react";
import Header from "./components/header";
import TopSale from "./components/topSale";
import Carosule from "./components/carosule";
import BankOffer from "./components/bankOffer";
import BestMobile from "./components/BestMobile";
import DaySale from "./components/DaySale";
import Footer from "./components/Footer"

function App() {
    
    let imgArr = ["https://rukminim2.flixcart.com/fk-p-flap/520/280/image/8bc07230b5ef20f4.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/93c68a7eadd552e6.png?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/3a0f369e4b2ef15a.jpg?q=20"]

    let img2Arr = ["https://rukminim2.flixcart.com/fk-p-flap/520/280/image/f5b94bd0fc453c92.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/92a1bbc9f56e8689.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/11c715258a227a50.jpg?q=20"]

    let MobileArr = [
        {
            src:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/n/i/d/-original-imagpgx4erjqnpzx.jpeg?q=70",
            title:"Google Pixel 7a"
        }, {
            src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/m/b/-original-imagrdefbw6bhbjr.jpeg?q=70",
            title: "Nothing Phone (2)"
        }, {
            src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/e/3/g84-5g-paym0018in-motorola-original-imagsy5zmhvkcfsx.jpeg?q=70 ",
            title: "MOTOROLA g84 5G"
        }, {
            src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/k/m/11-pro-5g-rmx3741-realme-original-imagq6asfa6hg5eu.jpeg?q=70",
            title: "realme 11 Pro+ 5G "
        }, {
            src: "https://rukminim2.flixcart.com/image/200/200/xif0q/mobile/m/j/o/-original-imaghkvue4yjecju.jpeg?q=70",
            title: "Redmi Note 12 Pro 5G"
        },
        {
            src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/m/b/-original-imagrdefbw6bhbjr.jpeg?q=70",
            title: "Nothing Phone (2)"
        }, {
            src: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/5/e/3/g84-5g-paym0018in-motorola-original-imagsy5zmhvkcfsx.jpeg?q=70 ",
            title: "MOTOROLA g84 5G"
        }]

    let TopdealsArr = [
        {
            src:"https://rukminim2.flixcart.com/image/612/612/xif0q/watch/f/x/a/-original-imagszc4scrmghqr.jpeg?q=70",
            title:"Armani Exchange, Guess "
        },
        {
            src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/y/a/o/-original-imagsuvnnwymb4jz.jpeg?q=70",
            title:"Fastrack, Ray-Ban, IDEE..."
        },
        {
            src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/c/x/n/5-ga1271-7-5-reebok-aura-orange-vector-navy-original-imagcpqgfsyqyhdv-bb.jpeg?q=70",
            title:"Tokyo Talkies, Clovia, Roadster."
        },
        {
            src:"https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/8/w/i/5xl-nc-multiwork-black-vedika-fashion-hub-original-imaguyf9yzms5uvb.jpeg?q=70",
            title:"Pepe Jeans, Raymond, Lee..."
        },
        {
            src:"https://rukminim2.flixcart.com/image/612/612/l3lx8cw0/kurta/v/e/s/xs-23516o-libas-original-imagezz95kmbprf3.jpeg?q=70",
            title:"Kurtas, Sets & more"
        },
        {
            src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/b/j/x/xl-men-regular-fit-solid-spread-collar-casual-shirt-foxter-original-imagsnbkrcrkncn2.jpeg?q=70",
            title:"Jack & Jones, UCB, Wrogn..."
        },
        {
            src:"https://rukminim2.flixcart.com/image/612/612/kr6oeq80/shirt/u/h/2/m-khsh000010-ketch-original-imag5ffccgyj4cdc.jpeg?q=70",
            title:"U.S Polo, Peter England..."
        },
    ]

    return (
    <>
        <Header></Header>
        <TopSale></TopSale>
        <Carosule></Carosule>
        <BankOffer></BankOffer>
        <BestMobile MobileData={MobileArr} title="Best Mobile"></BestMobile>
        <DaySale imgArr={imgArr}/>
        <BestMobile MobileData={TopdealsArr} title="Top Deals"></BestMobile>
        <DaySale imgArr={img2Arr}/>
        <BestMobile MobileData={MobileArr} title="Best Mobile"></BestMobile>
        <DaySale imgArr={imgArr}/>
        <TopSale></TopSale>
        <BestMobile MobileData={TopdealsArr} title="Top Deals"></BestMobile>
        <DaySale imgArr={img2Arr}/>
        <BankOffer></BankOffer>
        <BestMobile MobileData={MobileArr} title="Best Mobile"></BestMobile>
        <Footer/>
    </>
    )
}
export default App;