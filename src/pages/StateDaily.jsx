import React, { useEffect, useState } from 'react'
import Dropdown from '../component/Dropdown'
import LineChart from '../component/LineChart'

function StateDaily() {

  const [stateName, setStateName] = useState('AN')
    const [stateData, setStateData] = useState({})

    useEffect(() => {
      const getData = async ()=>{
        const res = await fetch("https://data.covid19india.org/v4/min/timeseries.min.json")
        const data = await res.json();
        setStateData(data[stateName].dates);
      }

      getData()
    }, [stateName])
    

  return (
    <>
        <div className='flex justify-center items-center p-11'>
            <div className='text-5xl font-poppins font-medium '>Daily Statewise data</div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div className='flex justify-start w-full'>
                <Dropdown setState = {setStateName}/>
            </div>

            <div className='w-9/12 mx-auto my-11'>
                <LineChart chartData = {stateData}/>
            </div>
        </div>

    </>
  )
}

export default StateDaily