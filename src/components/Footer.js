import React from 'react';

function Footer() {
  return (
    <div className="bg-[#1F2223] bottom-0 absolute left-0 right-0 w-full divide-y divide-[#3A3E41] text-[#9E9689]">
      <p className="pl-7 py-3">Turkey</p>
      <div className="flex px-8 py-3 text-[14px] flex-col items-center justify-center space-y-4 md:justify-between md:flex-row md:space-y-0">
        <ul className="flex space-x-3 flex-wrap justify-center md:space-x-8 gap-y-3 md:gap-y-0">
          <li className="hover:underline cursor-pointer">About</li>
          <li className="hover:underline cursor-pointer">Advertising</li>
          <li className="hover:underline cursor-pointer">Business</li>
          <li className="hover:underline cursor-pointer">How Search works</li>
        </ul>
        <ul className="flex space-x-8">
          <li className="hover:underline cursor-pointer">Privacy</li>
          <li className="hover:underline cursor-pointer">Terms</li>
          <li className="hover:underline cursor-pointer">Settings</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
