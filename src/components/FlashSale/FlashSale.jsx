import React from 'react'

function FlashSale() {
  return (
    <div className='ml-23 mt-5'>
        <div className='flex gap-2'>
            <div className='w-3 h-6 bg-[var(--secondary-colour3)]'></div>
            <p className='text-[var(--secondary-colour3)] text-xs pt-1 font-bold'>Today's</p>
        </div>
        <div className='flex gap-4'>
            <h3 className='text-2xl font-medium pt-5'>Flash Sales</h3>
            <div className='flex gap-2'>
                <p><span className='text-[11px]'>Days</span> <br /> <span className='text-[20px] font-medium'>03</span> <span className='text-[var(--secondary-colour3)]'>:</span> </p>
                <p><span className='text-[11px]'>Hours</span> <br /> <span className='text-[20px] font-medium'>23</span> <span className='text-[var(--secondary-colour3)]'>:</span> </p>
                <p><span className='text-[11px]'>Minutes</span> <br /> <span className='text-[20px] font-medium'>19</span> <span className='text-[var(--secondary-colour3)]'>:</span> </p>
                <p><span className='text-[11px]'>Seconds</span> <br /> <span className='text-[20px] font-medium'>56</span> <span className='text-[var(--secondary-colour3)]'>:</span> </p>
            </div>
        </div>
    </div>
  )
}

export default FlashSale