import React from 'react';
import list from "../../public/list.json"; 
import Cards from './Cards';
 




function HotelsPage() {
  return (
    <>
      <div className="max-w-screen-2xl mx-[120px] px-3 border-3 border-black">
        <div>
          <h1 className="text-black text-2xl"> 
            Find your Perfect Stay,
          </h1>
        </div>
        <div className='mt-12 grid gap-14 grid-cols-3'>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
}
export default HotelsPage;