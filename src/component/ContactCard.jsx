import { Typography } from '@material-tailwind/react'
import React from 'react'

function ContactCard({state}) {
  return (
        <div className='flex flex-col w-1/6 items-center text-center border border-gray-400 rounded-xl hover:scale-110 transition-all shadow-xl h-28 justify-center '>
            <Typography variant='h4'>{state.loc}</Typography>
            <Typography variant='h4'>{state.number}</Typography>
        </div>
  )
}

export default ContactCard