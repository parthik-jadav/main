import React from "react";
import HeaderButtons from "./headerButtons";

function Header() {
    return (<>
        <header className="bg-white">
            {/* header-container */}
            <div className="header-container mx-auto py-[12px] px-[28px] container">
                <div className="row flex flex-wrap align-center">
                    <div className="logo">
                        <a href="#">
                            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" className="w-[160px]" alt="" />
                        </a>
                    </div>
                    <div className="search-area flex">
                        <div className="search-icon bg-[#F0F5FF] p-[8px] rounded-l-lg ml-[28px]">
                            <svg width="24" height="24" className="pointer-hover" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="pointer-hover"></path><path d="M16 16L21 21" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </div>
                        <input type="text" name="" id="" className="border-none bg-[#F0F5FF] w-[750px] rounded-r-lg text-[17px] text-bold" placeholder="Search for Products, Brands and More" />
                    </div>
                    <HeaderButtons></HeaderButtons>
                </div>
            </div>
        </header>
    </>)
}
export default Header;