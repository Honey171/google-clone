import React, { useState } from 'react';
import { img1, img2, img3, img4 } from '../constants/Links';
import { BsImage } from 'react-icons/bs';
import { IoShareSocial } from 'react-icons/io5';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import node from '../constants/nodejs.png';
import { AiOutlineRight } from 'react-icons/ai';

function SearchSide() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const modal1Handler = () => {
    setOpen1(!open1);
  };
  const modal2Handler = () => {
    setOpen2(!open2);
  };
  const modal3Handler = () => {
    setOpen3(!open3);
  };
  const modal4Handler = () => {
    setOpen4(!open4);
  };

  return (
    <>
      <div className="pb-3 w-[365px] bg-[#181A1B] mt-9 rounded-lg border border-[#3A3E41] flex flex-col">
        <div className="flex flex-wrap">
          {img1}
          <div>
            <div className="flex">
              {img2}
              {img3}
            </div>
            {img4}
          </div>
          <div className="absolute w-[120px] h-[35px] translate-x-[242px] translate-y-[150px] pl-2 flex items-center space-x-2 text-white bg-black/60 rounded-tl-md hover:underline hover:bg-black/80 cursor-pointer">
            <BsImage />
            <p className="text-sm z-0">More images</p>
          </div>
        </div>
        <div className="pt-2 px-4 space-y-2 pb-4">
          <div className="flex justify-between items-center">
            <p className="text-[#D3CFC9] text-3xl">React</p>
            <p>
              <IoShareSocial className="text-[#888786] text-2xl" />
            </p>
          </div>
          <p className="text-[#9E9689] text-sm">Computer program</p>
        </div>
        <hr />
        <div className="px-4 pt-3 text-[14px] text-[#B5AEA4]">
          <p>
            React is a free and open-source front-end JavaScript library for
            building user interfaces based on UI components. It is maintained by
            Meta and a community of individual developers and companies.
          </p>
          <p className="text-[#5C87BD] hover:underline cursor-pointer">
            Wikipedia
          </p>
          <div className="pt-3 space-y-2 text-[#D3CFC9] pb-2">
            <p>
              <strong>Initial release date:</strong> May 29, 2013
            </p>
            <p>
              <strong>Platform:</strong>{' '}
              <span className="text-[#6997F4] hover:underline cursor-pointer">
                Web platform
              </span>
            </p>
            <p>
              <strong>Developer(s):</strong>{' '}
              <span className="text-[#6997F4] hover:underline cursor-pointer">
                Meta
              </span>{' '}
              and community
            </p>
            <p>
              <strong>Original author(s):</strong>{' '}
              <span className="text-[#6997F4] hover:underline cursor-pointer">
                Jordan Walke
              </span>
            </p>
            <p>
              <strong>License:</strong>{' '}
              <span className="text-[#6997F4] hover:underline cursor-pointer">
                {' '}
                MIT License
              </span>
            </p>
            <p>
              <strong>Repository:</strong>{' '}
              <span className="text-[#6997F4] hover:underline cursor-pointer">
                github.com/
              </span>
              <span className="text-[#6997F4] hover:underline cursor-pointer">
                facebook/
              </span>
              react
            </p>
            <p>
              <strong>Programming language:</strong>{' '}
              <span className="text-[#6997F4] hover:underline cursor-pointer">
                JavaScript
              </span>
            </p>
          </div>
        </div>
        <div className="pt-2 text-[15px] text-[#D3CFC9]">
          {/* add border-b when modal closed */}
          <p
            className="border-t border-[#3A3E41] px-4 py-2.5 flex justify-between items-center cursor-pointer"
            onClick={modal1Handler}
          >
            Database{' '}
            {open1 ? (
              <FiChevronUp className="text-lg text-[#8E8F8F]" />
            ) : (
              <FiChevronDown className="text-lg text-[#8E8F8F]" />
            )}
          </p>
          {open1 && (
            <div className="px-4">
              <p className="font-bold text-[16px] pr-1">
                Leading Local databases for React Native development
              </p>
              <ul className="list-disc pl-6 pr-4 text-[16px] pt-4 pb-4">
                <li>
                  Realm Database. The Realm was launched in 2004 to ease
                  development and help developers with mobile applications
                  faster. ...
                </li>
                <li>
                  SQLite. Are you looking for a grounded and designed database
                  for your react-native app development? ...
                </li>
                <li>Firebase. ...</li>
                <li>Watermelon DB. ..</li>
                <li>PouchDB. ...</li>
                <li>Vasern. ...</li>
                <li>BerkeleyDB.</li>
              </ul>
              <p className="-translate-y-3 translate-x-1 text-[13px] opacity-60">
                Jun 6, 2022
              </p>
              <div className="pb-4 pt-2">
                <p className="text-sm cursor-pointer">
                  https://www.zenesys.com › blog › top-react-native-
                </p>
                <p className="text-xl text-[#6997F4] cursor-pointer hover:underline">
                  Top 7 React Native Databases For App Development | Zenesys
                  Blogs
                </p>
              </div>
              <p className="pb-4 text-[16px]">
                Search for:{' '}
                <span className="text-[#6997F4] cursor-pointer hover:underline">
                  react databases
                </span>
              </p>
            </div>
          )}
          <hr className="border-[#3A3E41]" /> {/* add hidden when modal open */}
          <p
            className="px-4 py-2.5 flex justify-between items-center cursor-pointer"
            onClick={modal2Handler}
          >
            Purpose{' '}
            {open2 ? (
              <FiChevronUp className="text-lg text-[#8E8F8F]" />
            ) : (
              <FiChevronDown className="text-lg text-[#8E8F8F]" />
            )}
          </p>
          {open2 && (
            <div className="px-4">
              <p className="text-[14px] pr-[9px]">
                It's used for{' '}
                <strong>
                  building interactive user interfaces and web applications
                  quickly and efficiently with significantly less code than you
                  would with vanilla JavaScript
                </strong>
                . In React, you develop your applications by creating reusable
                components that you can think of as independent Lego blocks.
              </p>

              <p className="text-[13px] opacity-60 ">Jun 27, 2022</p>
              <div className="pb-4 pt-3">
                <p className="text-sm cursor-pointer">
                  https://blog.hubspot.com › website › react-js
                </p>
                <p className="text-[21px] leading-7 text-[#6997F4] cursor-pointer hover:underline">
                  What is React.js? (Uses, Examples, & More) - HubSpot Blog
                </p>
              </div>
              <p className="pb-4 text-[16px]">
                Search for:{' '}
                <span className="text-[#6997F4] cursor-pointer hover:underline">
                  purpose of react
                </span>
              </p>
            </div>
          )}
          <hr className="border-[#3A3E41]" />
          <p
            className="px-4 py-2.5 flex justify-between items-center cursor-pointer"
            onClick={modal3Handler}
          >
            Components{' '}
            {open3 ? (
              <FiChevronUp className="text-lg text-[#8E8F8F]" />
            ) : (
              <FiChevronDown className="text-lg text-[#8E8F8F]" />
            )}
          </p>
          {open3 && (
            <div className="px-4">
              <p className="font-bold text-[16px] pr-1">
                The List of the Best React Component Libraries
              </p>
              <ul className="list-disc pl-6 pr-4 text-[16px] pt-4 pb-4">
                <li>
                  Material UI. One of the most popular React components is well
                  known for faster and simpler web development. ...
                </li>
                <li>Ant Design. ...</li>
                <li>React-Bootstrap. ...</li>
                <li>React Router. ...</li>
                <li>Semantic UI React. ...</li>
                <li>Blueprint UI. ...</li>
                <li>React Motion. ...</li>
                <li>Fluent UI.</li>
              </ul>
              <div className="flex space-x-1 text-[13.5px] -translate-y-2 ">
                <p className="text-[#6997F4] hover:underline cursor-pointer">
                  More items...
                </p>
                <span>*</span>
                <p className="text-[13px] opacity-60">Jun 21,2022</p>
              </div>

              <div className="pb-4 pt-2">
                <p className="text-sm cursor-pointer">
                  https://technostacks.com › blog › react-component-
                </p>
                <p className="text-xl text-[#6997F4] cursor-pointer hover:underline">
                  23 Best React Component Libraries for 2022 | Technostacks
                </p>
              </div>
              <p className="pb-4 text-[16px]">
                Search for:{' '}
                <span className="text-[#6997F4] cursor-pointer hover:underline">
                  react framework components
                </span>
              </p>
            </div>
          )}
          <hr className="border-[#3A3E41]" />
          <p
            className=" px-4 py-2.5 flex justify-between items-center cursor-pointer"
            onClick={modal4Handler}
          >
            Different versions{' '}
            {open4 ? (
              <FiChevronUp className="text-lg text-[#8E8F8F]" />
            ) : (
              <FiChevronDown className="text-lg text-[#8E8F8F]" />
            )}
          </p>
          {open4 && (
            <div className="px-3">
              <p className="pt-2 pb-6 pl-1 font-bold">React Version</p>
              <table className="divide-y divide-[#3A3E41]">
                <tr className="flex space-x-[5.8rem] items-center text-[13px] pb-3">
                  <th>SN</th>
                  <th>Version</th>
                  <th>Release Date</th>
                </tr>
                <tr className="flex space-x-24 items-center py-2 opacity-70">
                  <td>10.</td>
                  <td>0.14.1</td>
                  <td>29/10/2015</td>
                </tr>
                <tr className="flex space-x-24 items-center py-2 opacity-70">
                  <td>11.</td>
                  <td>15.0.0</td>
                  <td>07/04/2016</td>
                </tr>
                <tr className="flex space-x-24 items-center py-2 opacity-70">
                  <td>12.</td>
                  <td>15.1.0</td>
                  <td>20/05/2016</td>
                </tr>
                <tr className="flex space-x-24 items-center py-2 opacity-70">
                  <td>13.</td>
                  <td>15.2.0</td>
                  <td>01/07/2016</td>
                </tr>
                <hr className="border-[#3A3E41]" />
              </table>
              <p className="text-sm pt-2 pb-6 text-[#6997F4] hover:underline cursor-pointer">
                28 more rows
              </p>
              <div className="pb-3">
                <p className="text-sm cursor-pointer">
                  https://www.javatpoint.com › react-version
                </p>
                <p className="text-xl text-[#6997F4] cursor-pointer hover:underline">
                  ReactJS Version - javatpoint
                </p>
              </div>
              <p className="pb-3">
                Search for:{' '}
                <span className="text-[#6997F4] cursor-pointer hover:underline">
                  different versions of react
                </span>
              </p>
            </div>
          )}
          <hr className="border-[#3A3E41]" />
        </div>
        <div className="pt-6 px-4">
          <div className="flex justify-between items-center pb-2">
            <p className="text-[#D3CFC9] text-[18px]">Books React</p>
            <p className="text-sm text-[#9E9689] hover:underline cursor-pointer">
              View 15+ more
            </p>
          </div>
          <div className="flex space-x-2 text-[#6997F4] text-[15px]">
            <div className="space-y-1">
              <img
                src="https://m.media-amazon.com/images/I/41m+5+-JRNL.jpg"
                alt=""
                className="rounded-lg w-[80px] h-[75px]"
              />
              <p className="max-w-[70px] leading-[19px] hover:underline cursor-pointer">
                The Road to Learn React: Y...
              </p>
            </div>
            <div className="space-y-1">
              <img
                src="https://m.media-amazon.com/images/I/51FHuacxYjL._SX198_BO1,204,203,200_QL40_ML2_.jpg"
                alt=""
                className="rounded-lg w-[80px] h-[75px]"
              />
              <p className="max-w-[70px] leading-[19px] hover:underline cursor-pointer">
                Learning React: Function...
              </p>
            </div>
            <div className="space-y-1">
              <img
                src="https://kbimages1-a.akamaihd.net/adc14b9c-80ec-4bf4-b273-d5948326367f/166/300/False/learning-react-3.jpg"
                alt=""
                className="rounded-lg w-[80px] h-[75px]"
              />
              <p className="max-w-[70px] leading-[19px] hover:underline cursor-pointer">
                Learning React: Modern...
              </p>
            </div>
            <div className="space-y-1">
              <img
                src="https://dl.ebooksworld.ir/motoman/images/Manning.React.in.Action.www.EBooksWorld.ir.jpg"
                alt=""
                className="rounded-lg w-[80px] h-[75px]"
              />
              <p className="max-w-[70px] leading-[19px] hover:underline cursor-pointer">
                React in Action
              </p>
            </div>
          </div>
        </div>
        <div className="pt-6 px-4">
          <div className="flex justify-between items-center pb-2">
            <p className="text-[#D3CFC9] text-[18px]">People also search for</p>
            <p className="text-sm text-[#9E9689] hover:underline cursor-pointer">
              View 10+ more
            </p>
          </div>
          <div className="flex space-x-2 text-[#6997F4] text-[15px]">
            <div className="space-y-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/50/Angular-logo.png"
                alt=""
                className="w-[80px] h-[75px] rounded-lg bg-white"
              />
              <p className="max-w-[70px] leading-[19px] hover:underline cursor-pointer">
                Angular
              </p>
            </div>
            <div className="space-y-1">
              <img
                src={node}
                alt=""
                className="w-[80px] h-[75px] rounded-lg bg-white"
              />
              <p className="max-w-[70px] leading-[19px] hover:underline cursor-pointer">
                Node.js
              </p>
            </div>
            <div className="space-y-1">
              <img
                src="https://toppng.com/public/uploads/preview/react-native-svg-transformer-allows-you-import-svg-aperture-science-innovators-logo-11562851994zqcpwozsvy.png"
                alt=""
                className="w-[80px] h-[75px] rounded-lg"
              />
              <p className="max-w-[70px] leading-[19px] hover:underline cursor-pointer">
                React Native
              </p>
            </div>
            <div className="space-y-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/555px-Vue.js_Logo_2.svg.png"
                alt=""
                className="w-[80px] h-[75px] rounded-lg bg-white"
              />
              <p className="max-w-[70px] leading-[19px] hover:underline cursor-pointer">
                Vue.js
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-[365px] divide-y divide-[#3A3E41] bg-[#181A1B] mt-9 rounded-lg border border-[#3A3E41]">
          <p className="px-4 py-3 text-lg text-[#D3CFC9]">See results about</p>
          <div className="flex items-center justify-between px-4 py-2 hover:bg-[#1F2223] cursor-pointer">
            <div className="flex">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
                alt=""
                className="w-[40px] h-[40px] rounded-md bg-white"
              />
              <span className="-space-y-0.5 pl-3">
                <p className="text-[#D3CFC9] text-[15px]">React native</p>
                <p className="text-[#9E9689] text-sm">Software</p>
              </span>
            </div>
            <AiOutlineRight className="text-[#9E9689]" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchSide;
