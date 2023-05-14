import React from 'react'
import { Facebook, Instagram, Twitter } from '../assets'

const Footer = () => {
  return (
    <footer className='flex p-10 bg-yellow-50 shadow'>
      <div className='flex-1'>
        <h1 className='text-2xl font-bold'>MarketLab</h1>
        <p className='text-sm text-gray-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam
          necessitatibus quas dolorum accusantium quidem. Quisquam, quae
          voluptates. Quisquam, quae voluptates.
        </p>
        {/* Social Media Icons */}
        <div className='flex mt-4 space-x-4'>
          <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
            <img src={Facebook} alt='Facebook' className='w-10 h-10'/>
          </a>
          <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
            <img src={Twitter} alt='Twitter' className='w-10 h-10'/>
          </a>
          <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
            <img src={Instagram} alt='Instagram' className='w-10 h-10'/>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer