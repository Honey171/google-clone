import React, { useState, useEffect } from 'react';
import { MdClose, MdOutlineBook, MdSearch } from 'react-icons/md';
import { FaMicrophone } from 'react-icons/fa';
import { AiFillCamera, AiOutlineSetting } from 'react-icons/ai';
import { FcSearch } from 'react-icons/fc';
import { RiVideoLine } from 'react-icons/ri';
import { CgMenuGridO } from 'react-icons/cg';
import { BsImage } from 'react-icons/bs';
import { BiNews } from 'react-icons/bi';
import { FiMoreVertical } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function SearchNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div>
        <div
          className={`flex flex-col lg:flex-row items-center justify-between space-y-3 lg:space-y-0  ${
            isScrolled ? 'fixed w-full top-0 py-1 bg-[#181A1B] z-10' : 'py-7'
          }`}
        >
          <div className="flex space-y-2 lg:space-y-0 flex-col lg:flex-row items-center lg:space-x-10 md:pl-[68px]">
            <Link to="/">
              <img
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                alt="logo"
                className="w-24 h-8"
              />
            </Link>
            <div className="flex items-center">
              <input
                type="text"
                disabled={true}
                placeholder="react"
                className="pl-4 border-2 text-[17px] border-[#383D3F] outline-none w-[320px] h-[46px] rounded-full bg-[#181A1B] text-white overflow-hidden placeholder:text-white caret-transparent  placeholder:-translate-y-0.5 md:w-[530px] hover:border-opacity-40"
              />
              <div className="flex items-center absolute translate-x-40 md:translate-x-[370px] space-x-2">
                <div className="flex space-x-3 items-center text-2xl">
                  <MdClose className="text-[#9E9689] cursor-pointer" />
                  <div className="w-[1px] h-7 bg-[#3A3E41]"></div>
                </div>
                <div className="flex text-[22px] text-blue-500 space-x-[1.2rem] ">
                  <FaMicrophone className="cursor-pointer text-blue-400 text-[20px]" />
                  <AiFillCamera className="cursor-pointer" />
                  <MdSearch className="cursor-pointer text-blue-400 text-[23px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-5 lg:pr-[24px]">
            <AiOutlineSetting className="text-2xl text-[#A9A297] cursor-pointer" />
            <CgMenuGridO className="text-2xl text-[#A9A297] cursor-pointer" />
            <div className="bg-[#7B1FA2] rounded-full px-2 py-0.5 text-lg text-white cursor-pointer">
              M
            </div>
          </div>
        </div>
        {!isScrolled && (
          <div>
            <ul className="flex md:pl-[220px] space-x-2 md:space-x-6 text-[#868279] text-sm font-semibold">
              <li className="cursor-pointer flex items-center space-x-1">
                <FcSearch className="text-base" />{' '}
                <span className="text-blue-500">All</span>
                <div className="w-9 h-[3px] bg-blue-600 absolute translate-y-[20px] -translate-x-[3px]"></div>
              </li>
              <li className="cursor-pointer flex items-center space-x-1">
                <RiVideoLine className="text-base" /> <span>Videos</span>
              </li>
              <li className="cursor-pointer flex items-center space-x-1">
                <BsImage className="text-base" /> <span>Images</span>
              </li>
              <li className="cursor-pointer flex items-center space-x-1">
                <BiNews className="text-base" /> <span>News</span>
              </li>
              <li className="cursor-pointer flex items-center space-x-1">
                <MdOutlineBook className="text-base" /> <span>Books</span>
              </li>
              <li className="cursor-pointer flex items-center space-x-1">
                <FiMoreVertical className="text-base" /> <span>More</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default SearchNav;
