import React from 'react';
import { CgMenuGridO } from 'react-icons/cg';

function Navbar() {
  return (
    <>
      <div className="py-2">
        <ul className="flex items-center space-x-5 justify-end text-[#C7C6C3] text-[13px] pr-5 py-1.5 font-medium">
          <li className="cursor-pointer hover:underline">Gmail</li>
          <li className="cursor-pointer hover:underline">Images</li>
          <li>
            <CgMenuGridO className="text-2xl text-[#A9A297] opacity-90 hover:opacity-100 cursor-pointer" />
          </li>
          <li>
            <div className="bg-[#7B1FA2] rounded-full px-2 py-0.5 text-lg font-normal text-white cursor-pointer">
              M
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
