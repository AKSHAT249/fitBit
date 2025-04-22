import React from 'react';
import { navLinks } from '../utils/constants';

const Navbar = () => {
  return (
    <div className="absolute z-50 w-full bg-black py-1">
      <div className="flex px-4 items-center justify-start lg:justify-between lg:relative ">
        <h1 className="text-sm lg:text-xl text-montserrat text-white font-bold tracking-tighter">Bodyline Fitness</h1>
        <div className="px-20 lg:absolute lg:flex lg:items-center lg:justify-center lg:w-full">
          <ul className="flex gap-4 ">
          {
            navLinks.map( (link) => (
              <li className="text-xs text-center lg:text-md  text-montserrat text-white font-bold tracking-tighter">
                {link.name}
              </li>
            ) )
          }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar