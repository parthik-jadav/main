import React from 'react';
import CarosuleImg from "./carosuleImg";

const Carosule = ()=>{
    return (<>
        <div className="Carosule-wraperr mt-[10px]">
            <div className="container mx-auto bg-white">
                <div className="row flex justify-center">
                    <div id="default-carousel" className="relative w-full" data-carousel="slide">
                        <div className="relative h-[255px] overflow-hidden rounded-lg">
                            <CarosuleImg></CarosuleImg>
                        </div>
                        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                        </div>
                        <button type="button" className="absolute top-0 start-[-20px] z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span className="inline-flex items-center justify-center w-10 h-10 h-[90px] rounded-r-lg bg-white dark:bg-gray-800/30  group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-3 h-3 text-[#777777] dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 end-[-20px] z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="inline-flex items-center justify-center w-10 h-10 h-[90px] rounded-l-lg bg-white dark:bg-gray-800/30  group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-3 h-3  text-[#777777] dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </>)
}

export default Carosule;