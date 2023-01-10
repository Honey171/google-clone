import React from 'react';
import { MdClose, MdSearch } from 'react-icons/md';
import { FaMicrophone } from 'react-icons/fa';
import { AiFillCamera } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Input() {
  return (
    <div className="flex flex-col justify-center items-center h-[72vh] space-y-7">
      <img
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="logo"
      />
      <div className="flex items-center">
        <MdSearch className="text-xl absolute translate-x-4 text-[#ACA59A]" />
        <input
          type="text"
          disabled={true}
          placeholder="react"
          className="pl-12 border-2 text-[17px] border-[#383D3F] outline-none w-[350px] h-[46px] rounded-full bg-[#181A1B] text-white overflow-hidden placeholder:text-white caret-transparent hover:border-opacity-40 placeholder:-translate-y-0.5 md:w-[585px]"
        />
        <div className="flex space-x-3 items-center absolute translate-x-[235px] text-2xl md:translate-x-[455px]">
          <MdClose className="text-[#9E9689] cursor-pointer" />
          <div className="w-[1px] h-7 bg-[#3A3E41]"></div>
        </div>
        <div className="absolute flex translate-x-[280px] text-[22px] text-blue-500 space-x-4 md:translate-x-[505px]">
          <FaMicrophone className="cursor-pointer" />
          <AiFillCamera className="cursor-pointer" />
        </div>
      </div>
      <div className="space-x-3 text-[#C7C6C3] text-[15px]">
        <Link
          to="/search"
          className="px-4 py-1.5 bg-[#1B1E1F] border border-[#323638] border-opacity-60 hover:border-opacity-100 rounded-md hover:text-white"
        >
          Google Search
        </Link>
        <button className="px-4 py-1.5 bg-[#1B1E1F] border border-[#323638] border-opacity-60 hover:border-opacity-100 rounded-md hover:text-white">
          I'm Feeling Lucky
        </button>
      </div>
      <p className="text-[13px] text-[#92AEA4]">
        Google offered in:{' '}
        <span className="text-blue-400 pl-1 hover:underline cursor-pointer">
          Türkçe
        </span>
      </p>
      <p className="text-white text-sm">
        This clone made for educational purpose
      </p>
    </div>
  );
}

export default Input;
