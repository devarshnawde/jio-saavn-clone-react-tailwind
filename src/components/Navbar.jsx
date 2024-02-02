import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav>
    {/* First div */}
        <div className='flex flex-col lg:flex-row justify-between items-center lg:mx-0'>
                <div className='flex justify-between items-center gap-2 mr-4'>
                    <img src="/savan-logo.png" alt="Saavan Logo" width={37} />
                    <Link href='/' className='font-extrabold text-lg'>Jio Saavan</Link>
                </div>
                <div className='flex text-[24px] lg:text-[15px] text-gray-600 font-semibold h-full gap-5'> 
                    <li className='list-none'>Music</li>
                    <li className='list-none'>Podcast</li>
                    <li className='list-none'>Go pro</li>
                </div>
        </div>

        {/* second div */}
        <div>
            <div>
                <div>
                    <span>Music Languages</span>
                    <span>Hindi</span>
                </div>
            </div>
            <div>

            </div>
        </div>
            {/* Third div */}
        

    </nav>
  )
}

export default Navbar