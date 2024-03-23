import { Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'
import ContactCard from './ContactCard';

function EmergencyContacts() {

    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const getData = async ()=>{
            const res = await fetch("https://api.rootnet.in/covid19-in/contacts");
            let data = await res.json()
            setContacts(data.data.contacts.regional);
            // console.log(data.data.contacts.regional);
        }

        getData()
    }, [])
    
  return (
    <div>
        <Typography variant='h1' className='mx-auto w-fit my-24'>Emergency Contacts</Typography>
        <Typography variant='h2' className='mx-auto w-fit my-24'>Regional Helplines</Typography>
        <div className='w-11/12 h-fit flex flex-wrap gap-9 justify-center mx-auto'>
            {contacts.map((contact)=>{return (
                <ContactCard state = {contact}/>  
            )})}   
        </div>
    </div>
  )
}

export default EmergencyContacts