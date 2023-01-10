import React from 'react';
import { BsCircleFill } from 'react-icons/bs';

function SearchFooter() {
  return (
    <div className="bg-[#1F2223] absolute right-0 left-0 w-full divide-y divide-[#3A3E41] text-[#9E9689] text-[15px]">
      <div className="flex items-center md:space-x-4 space-x-1 md:pl-[220px] pt-3">
        <p>Turkey</p>
        <div className="h-10 w-[0.1px] bg-[#3A3E41]"></div>
        <div className="flex items-center space-x-1 cursor-pointer">
          <BsCircleFill className="text-[10px] text-[#585F63]" />
          <p className="font-bold">Istanbul</p>
          <p className="text-[#6997F4] text-xs md:text-sm">
            - Based on your past activity - Update location
          </p>
        </div>
      </div>
      <div className="md:pl-[220px] flex space-x-7 pt-2 pb-4">
        <p className="opacity-80 hover:opacity-100 cursor-pointer">Help</p>
        <p className="opacity-80 hover:opacity-100 cursor-pointer">
          Send feedback
        </p>
        <p className="opacity-80 hover:opacity-100 cursor-pointer">Privacy</p>
        <p className="opacity-80 hover:opacity-100 cursor-pointer">Terms</p>
      </div>
    </div>
  );
}

export default SearchFooter;
