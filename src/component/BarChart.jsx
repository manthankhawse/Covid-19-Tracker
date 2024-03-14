import React from 'react'
import {Bar} from 'react-chartjs-2'


function BarChart({chartData}) {
    console.log(chartData);
    let userGainData = [];
    chartData.Data.filter((userData)=>userGainData.push({label:'Users',backgroundColor:['rgba(0, 0, 255, 0.5)'],data: userData,}))
    console.log(userGainData)
  return (
            <Bar
        data={{
          datasets: userGainData,
        }}
        options={{
          legend: { display: true},
          title: { display: true, text: `User data` },
        }}
      />
        
    
    
  )
}

export default BarChart