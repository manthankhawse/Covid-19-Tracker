import React from 'react'




function Homepage() {
  return (
    <>
        <div className='flex flex-col gap-24'> 
            <div className='text-9xl font-poppins font-semibold mx-auto p-11'>Covid 19 Tracker</div>
            <div >
            <div className='flex w-full justify-around font-poppins'>
                <div className=' h-64 w-1/6 bg-blue-600 text-center flex items-center justify-center text-white text-4xl  rounded-xl font-bold hover:cursor-pointer hover:scale-110 transition-all ease-in'>Total<br/>43119112</div>
                <div className=' h-64 w-1/6 bg-orange-600 text-center flex items-center justify-center text-white text-4xl  rounded-xl font-bold hover:cursor-pointer hover:scale-110 transition-all ease-in'>Confirmed<br/>{43119064+48}</div>
                <div className=' h-64 w-1/6 bg-green-600 text-center flex items-center justify-center text-white text-4xl  rounded-xl font-bold hover:cursor-pointer hover:scale-110 transition-all ease-in'>Discharged<br/>42576815</div>
                <div className=' h-64 w-1/6 bg-red-600 text-center flex items-center justify-center text-white text-4xl  rounded-xl font-bold hover:cursor-pointer hover:scale-110 transition-all ease-in'>Deaths<br/>524201</div>
            </div>
            <div className='flex flex-col '>
                <div className='text-4xl font-poppins font-medium mx-auto p-11 mt-24'>Get Detailed stats for your state!</div>
                <div className=' flex w-2/4 mx-auto justify-around items-center'>
                <div className='h-24 w-36 bg-blue-500 flex justify-center items-center text-4xl rounded-xl cursor-pointer text-white hover:bg-blue-900 active:translate-x-1'>Daily</div>
                <div className='h-24 w-36 bg-blue-500 flex justify-center items-center text-4xl rounded-xl cursor-pointer text-white hover:bg-blue-900 active:translate-x-1'>Overall</div>
                </div>
            </div>
            </div>
        </div>

        
    </>
  )
}

export default Homepage