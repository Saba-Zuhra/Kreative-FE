import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'


export default function ContactScreen() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_API,
  })

  
  const [contactInfo, setContactInfo] = React.useState({
    name: '',
    email: '',
    message: '',
  })

  if (loadError) return "Error loading maps"
  if (!isLoaded) return "Loading Maps"

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(contactInfo)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setContactInfo({ ...contactInfo, [name]: value })
  }

  return (
    <>
      <div className='flex flex-row justify-between gap-4'>
        <div className='w-1/2'>
          <h1 className='text-3xl font-bold'>Contact Us</h1>
          <p className='text-xl'>Got questions? You can contact us</p>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-2'>
              <div className='w-1/2'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' id='name' value={contactInfo.name} onChange={handleInputChange} className='w-full border-2 border-gray-300 rounded-md p-2' />
              </div>
              <div className='w-1/2'>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' id='email' value={contactInfo.email} onChange={handleInputChange} className='w-full border-2 border-gray-300 rounded-md p-2' />
              </div>
            </div>
            <div className='flex flex-col'>
              <label htmlFor='message'>Message</label>
              <textarea name='message' id='message' value={contactInfo.message} onChange={handleInputChange} className='w-full border-2 border-gray-300 rounded-md p-2' />
            </div>
            <button className='bg-blue-500 text-white rounded-md p-2' onClick={handleFormSubmit}>Send</button>
          </div>
        </div>
        <div className='w-1/2'>
          <Map />
        </div>
      </div>
    </>
  )
}

function Map() {
  const center = useMemo(() => ({ lat: 31.4811, lng: 74.3034 }), [])
  return (
    <GoogleMap zoom={17} center={center} mapContainerClassName='w-full h-screen'>
      <MarkerF position={center} />
    </GoogleMap>
  )
}