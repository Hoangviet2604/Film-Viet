import React, { useState } from 'react';

function ItemCarousel(props) {
    const carousel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const [x,setX] = useState(0);
    

    const  handelX = () => {
             if(x != 60) {
                setX(x + 20);
             }else{
                setX(0);
             }
    }
    return (
        <>
            <div className='overflow-hidden'>
                <div className='flex w-[500vw] gap-2' style={{ transform: `translateX(-${x}%)` }}>
                    {carousel.map(a => (
                        <div className='item '>
                            <h1>{a}</h1>
                            <div className="item-im">
                            <img src="https://bazaarvietnam.vn/wp-content/uploads/2021/08/nhung-bo-phim-hay-tren-netflix-4-e1628088765295.jpeg" alt="" />
                            </div>
                            <div className="item-content bg-black text-white">
                                  <h1>vsvv</h1>
                                  <button>sdvsd</button>
                                  <p>vfsdvdsfvdsfv</p>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div >
            <button onClick={handelX} className='bg-black'> bam </button>
            
        </>

    );
}

export default ItemCarousel;