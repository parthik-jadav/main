 import React from 'react';

function headerButtons() {
  return (
      <div className="social-btn flex align-center">
         <button type="button" className="text-black ms-[12px] hover:bg-[#2a55e5] hover:text-white text-[16px] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
             <i className="fa-regular fa-user text-[16px] me-[10px]"></i>
             Login
             <i className="fa-solid fa-chevron-down text-[10px] ms-[10px]"></i>
         </button>
         <button type="button" className="text-black ms-[12px] text-[16px] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
             <i className="fa-solid fa-cart-shopping text-[16px] me-[10px]"></i>
             Cart
         </button>
         <button type="button" className="text-black ms-[12px] text-[16px] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
             <i className="fa-solid fa-shop text-[16px] me-[10px]"></i>
             Become a Seller
         </button>
         <button type="button" className="text-black ms-[12px] text-[16px] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
             <i className="fa-solid fa-ellipsis-vertical"></i>
         </button>
     </div>
  );
}

export default headerButtons;
