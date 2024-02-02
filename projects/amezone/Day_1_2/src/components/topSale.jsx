import TopSaleItem from "./topSaleItem"; 
import React from 'react';

function topSale() {
  return (
    <div>
      <div className="topsale-wraperr mt-[10px]">
            <div className="container mx-auto bg-white">
                <div className="row flex justify-center">
                   <TopSaleItem></TopSaleItem>
                </div>
            </div>
        </div>
    </div>
  );
}

export default topSale;
