import React from 'react'
import playStation from '../../assets/images/playStation.png';
import woman from '../../assets/images/attractiveWoman.jpg';
import speakers from '../../assets/images/speakers.png';
import perfume from '../../assets/images/perfume.png';

const Featured = () => {
  return (
    <div className='mt-5'>
            <div className='flex gap-2 ml-23 '>
                <div className='w-3 h-6 bg-[var(--secondary-colour3)]'></div>
                <p className='text-[var(--secondary-colour3)] text-xs pt-1 font-bold'>Featured</p>
            </div>
            <div className='flex justify-between'>
                  <h3 className='text-[18px] font-normal md:text-2xl md:font-medium pt-5 md:ml-20 ml-12'>New Arrival</h3>
                
            </div>
          
           <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-x-4 px-6 mx-14">

                {/* LEFT COLUMN */}
                <div className="bg-black h-[450px] w-full relative">
                    <img
                    src={playStation}
                    alt=""
                    className="w-full h-[95%] object-cover"
                    />
                    <div className="text-white p-3  absolute bottom-6 left-3">
                    <h3>PlayStation 5</h3>
                    <p>Black and White version of the PS5 coming out on sale.</p>
                    <a href="">Shop Now</a>
                    </div>
                </div>

            {/* RIGHT COLUMN */}
            <div className="grid grid-rows-2 gap-4 h-[450px]">

                    {/* Top Right — removed mt-5 */}
                    <div className="h-full flex bg-black text-white">
                    <div className="pt-12 pl-4">
                        <h3>Women's Collections</h3>
                        <p>Featured woman collections that give you another vibe.</p>
                        <a href="">Shop Now</a>
                    </div>

                    <img
                        src={woman}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

    {/* Bottom Right */}
    <div className="flex gap-4">

                    {/* Speakers */}
                    <div className="flex-1 bg-black relative">
                        <img src={speakers} alt="" className="w-full h-[70%] object-cover mt-6" />
                        <div className="mt-2 text-[var(--text-colour1)] absolute bottom-6 left-3">
                        <h3>Speakers</h3>
                        <p>Amazon wireless speakers</p>
                        <a href="" className='text-[12px]'>Shop Now</a>
                        </div>
                    </div>

                {/* Perfume */}
                <div className="flex-1 bg-black relative">
                    <img src={perfume} alt="" className="w-full h-[70%] object-cover mt-6" />
                    <div className="mt-2 text-[var(--text-colour1)] absolute bottom-4 left-3">
                    <h3>Perfume</h3>
                    <p className='text-[12px]'>GUCCI INTENSE OUD EDP</p>
                    <a href="" className='text-[12px]'>Shop Now</a>
                    </div>
                </div>

    </div>
             </div>
        </div>
    
    
        </div>
  )
}

export default Featured