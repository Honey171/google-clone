import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { MdSearch } from 'react-icons/md';
import { HiOutlineChevronDoubleRight } from 'react-icons/hi';
import { AiOutlineRight } from 'react-icons/ai';
import SearchSide from './SearchSide';

function SearchResult() {
  const [opened1, setOpened1] = useState(false);
  const [opened2, setOpened2] = useState(false);
  const [opened3, setOpened3] = useState(false);
  const [opened4, setOpened4] = useState(false);

  const search1Handler = () => {
    setOpened1(!opened1);
  };
  const search2Handler = () => {
    setOpened2(!opened2);
  };
  const search3Handler = () => {
    setOpened3(!opened3);
  };
  const search4Handler = () => {
    setOpened4(!opened4);
  };

  return (
    <>
      <div className="md:ml-[220px] md:max-w-xl mt-4 max-w-[300px] h-[100%]">
        <p className="text-[#C7C6C3] text-sm">https://reactjs.org</p>
        <div className="space-y-0.5">
          <p className="text-xl text-[#A65EE3] hover:underline cursor-pointer">
            React - A JavaScript library for building user interfaces
          </p>
          <p className="text-sm text-[#A9A297]">
            <strong>React</strong> · Declarative. <strong>React</strong> makes
            it painless to create interactive UIs. · Component-Based. Build
            encapsulated components that manage their own state, then compose
            ...
          </p>
          <p className="text-[#A9A297] text-sm">
            You've visited this page 2 times. Last visit: 11/30/22
          </p>
        </div>
        <div className="ml-5 mt-4 space-y-4">
          <div>
            <p className="text-xl text-[#6997F4] hover:underline cursor-pointer">
              Getting Started
            </p>
            <p className="text-sm text-[#A9A297]">
              Tutorial: Intro to React - Add React to a Website - Hello World -
              ...
            </p>
          </div>
          <div>
            <p className="text-xl text-[#6997F4] hover:underline cursor-pointer">
              Tutorial: Intro to React
            </p>
            <p className="text-sm text-[#A9A297]">
              React is a declarative, efficient, and flexible JavaScript library
              ...
            </p>
          </div>
          <div>
            <p className="text-xl text-[#A65EE3] hover:underline cursor-pointer">
              Create a New React App
            </p>
            <p className="text-sm text-[#A9A297]">
              Create React App is a comfortable environment for learning React
              ...
            </p>
          </div>
          <div>
            <p className="text-xl text-[#6997F4] hover:underline cursor-pointer">
              Hello World
            </p>
            <p className="text-sm text-[#A9A297]">
              const root = ReactDOM.createRoot(document.getElementById('root ...
            </p>
          </div>
          <p className="flex items-center text-[#6997F4] text-sm space-x-1">
            <span className="hover:underline cursor-pointer">
              More results from reactjs.org
            </span>{' '}
            <HiOutlineChevronDoubleRight className="text-xs translate-y-0.5" />
          </p>
        </div>

        <div className="mt-10 text-[#C7C6C3] space-y-2 text-[16.5px]">
          <p className="text-2xl">People also ask</p>
          <p
            className="border-t py-1.5  border-[#3A3E41]/40 flex justify-between items-center cursor-pointer"
            onClick={search1Handler}
          >
            What is React used for?{' '}
            {opened1 ? (
              <FiChevronUp className="text-lg text-[#8E8F8F]" />
            ) : (
              <FiChevronDown className="text-lg text-[#8E8F8F]" />
            )}
          </p>
          {opened1 && (
            <div className='className="transition duration-200 ease-in'>
              <span className="text-[16px]">
                It's used for{' '}
                <strong>
                  building interactive user interfaces and web applications
                  quickly and efficiently with significantly less code than you
                  would with vanilla JavaScript
                </strong>
                . In React, you develop your applications by creating reusable
                components that you can think of as independent Lego blocks.{' '}
                <span className="text-xs text-[#9E9689] pl-1">
                  {' '}
                  Jun 27, 2022
                </span>
              </span>

              <div className="mt-4">
                <p className="text-[#C7C6C3] text-sm">
                  https://blog.hubspot.com › website › react-js
                </p>
                <p className="text-xl text-[#6997F4] hover:underline cursor-pointer">
                  What is React.js? (Uses, Examples, & More) - HubSpot Blog
                </p>
              </div>

              <div className="mt-6">
                <p>
                  Search for:{' '}
                  <span className="text-[#6997F4] hover:underline cursor-pointer">
                    What is React used for?
                  </span>
                </p>
              </div>
            </div>
          )}
          <p
            className="border-t py-1.5 border-[#3A3E41]/40 flex justify-between items-center cursor-pointer"
            onClick={search2Handler}
          >
            What React means?{' '}
            {opened2 ? (
              <FiChevronUp className="text-lg text-[#8E8F8F]" />
            ) : (
              <FiChevronDown className="text-lg text-[#8E8F8F]" />
            )}
          </p>

          {opened2 && (
            <div className='className="transition duration-200 ease-in'>
              <span className="text-[16px]">
                React is{' '}
                <strong>a JavaScript-based UI development library</strong>.
                Facebook and an open-source developer community run it. Although
                React is a library rather than a language, it is widely used in
                web development. The library first appeared in May 2013 and is
                now one of the most commonly used frontend libraries for web
                development.
                <span className="text-xs text-[#9E9689] pl-1">
                  {' '}
                  Nov 25, 2022
                </span>
              </span>

              <div className="mt-4">
                <p className="text-[#C7C6C3] text-sm">
                  https://www.simplilearn.com › tutorials › reactjs-tutorial
                </p>
                <p className="text-xl text-[#6997F4] hover:underline cursor-pointer">
                  The Best Guide to Know What Is React [Updated] - Simplilearn
                </p>
              </div>

              <div className="mt-6">
                <p>
                  Search for:{' '}
                  <span className="text-[#6997F4] hover:underline cursor-pointer">
                    What React means?
                  </span>
                </p>
              </div>
            </div>
          )}
          <p
            className="border-t py-1.5 border-[#3A3E41]/40 flex justify-between items-center cursor-pointer"
            onClick={search3Handler}
          >
            Is React better than Python?{' '}
            {opened3 ? (
              <FiChevronUp className="text-lg text-[#8E8F8F]" />
            ) : (
              <FiChevronDown className="text-lg text-[#8E8F8F]" />
            )}
          </p>
          {opened3 && (
            <div className='className="transition duration-200 ease-in'>
              <span className="text-[16px]">
                To summarize, React JS is best for website and application
                development whereas Python is a general-purpose language and it
                works best for machine learning, numerical computing, game
                development signal processing, and backend scripting language.
                <span className="text-xs text-[#9E9689] pl-1">
                  {' '}
                  Oct 21, 2022
                </span>
              </span>

              <div className="mt-4">
                <p className="text-[#C7C6C3] text-sm">
                  https://www.bigscal.com › blogs › frontend-technology
                </p>
                <p className="text-xl text-[#6997F4] hover:underline cursor-pointer">
                  React js vs Python: Which is better? - Bigscal
                </p>
              </div>

              <div className="mt-6">
                <p>
                  Search for:{' '}
                  <span className="text-[#6997F4] hover:underline cursor-pointer">
                    Is React better than Python?
                  </span>
                </p>
              </div>
            </div>
          )}
          <p
            className="border-t py-1.5 border-[#3A3E41]/40 flex justify-between items-center cursor-pointer"
            onClick={search4Handler}
          >
            Is react for HTML or JS?{' '}
            {opened4 ? (
              <FiChevronUp className="text-lg text-[#8E8F8F]" />
            ) : (
              <FiChevronDown className="text-lg text-[#8E8F8F]" />
            )}
          </p>
          {opened4 && (
            <div className="transition duration-200 ease-in">
              <span className="text-[16px] space-x-1">
                To get an overview of what React is,{' '}
                <strong>you can write React code directly in HTML</strong>. But
                in order to use React in production, you need npm and Node.js
                installed.
              </span>

              <div className="mt-4">
                <p className="text-[#C7C6C3] text-sm">
                  https://www.w3schools.com › react › react_getstarted
                </p>
                <p className="text-xl text-[#6997F4] hover:underline cursor-pointer">
                  React Getting Started - W3Schools
                </p>
              </div>

              <div className="mt-6">
                <p>
                  Search for:{' '}
                  <span className="text-[#6997F4] hover:underline cursor-pointer">
                    Is react for HTML or JS?
                  </span>
                </p>
              </div>
            </div>
          )}
          <div className="flex items-center space-x-4">
            <div className="w-[500px] h-[1px] bg-[#3A3E41]/40"></div>
            <p className="text-sm text-[#8E8F8F]">Feedback</p>
          </div>
        </div>
        <div className="inline xl:hidden">
          <SearchSide />
        </div>
        <div className="space-y-0.5 mt-9">
          <p className="text-[#C7C6C3] text-sm">
            https://en.wikipedia.org › wiki › React_(JavaScript_libr...
          </p>
          <p className="text-[#6997F4] text-xl hover:underline cursor-pointer">
            React (JavaScript library) - Wikipedia
          </p>
          <p className="text-sm text-[#A9A297]">
            <strong>React</strong> (also known as <strong>React</strong>.js or
            ReactJS) is a free and open-source front-end JavaScript library for
            building user interfaces based on UI components.
          </p>
          <div className="flex pt-1.5 space-x-4 text-[14px] text-[#A9A297]">
            <div>
              <p>
                Stable release:{' '}
                <span className="font-medium">
                  18.2.0 / 14 June 2022; 5 mont...
                </span>
              </p>
              <p>
                Initial release:{' '}
                <span className="font-medium">May 29, 2013; 9 years ago</span>
              </p>
            </div>
            <div>
              <p>
                Platform:{' '}
                <span className="text-[#6997F4] hover:underline cursor-pointer">
                  Web platform
                </span>
              </p>
              <p>
                Developer(s):{' '}
                <span className="text-[#6997F4] hover:underline cursor-pointer">
                  Meta
                </span>{' '}
                and community
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-0.5 mt-9">
          <p className="text-[#C7C6C3] text-sm">https://reactnative.dev</p>
          <p className="text-[#6997F4] text-xl hover:underline cursor-pointer">
            React Native · Learn once, write anywhere
          </p>
          <p className="text-sm text-[#A9A297]">
            <strong>React</strong> Native combines the best parts of native
            development with <strong>React</strong>, a best-in-class JavaScript
            library for building user interfaces.
          </p>
        </div>

        <div className="space-y-0.5 mt-9">
          <p className="text-[#C7C6C3] text-sm">
            https://github.com › facebook › react
          </p>
          <p className="text-[#6997F4] text-xl hover:underline cursor-pointer">
            React is a JavaScript library for building user interfaces. - GitHub
          </p>
          <p className="text-sm text-[#A9A297]">
            <strong>React</strong> is a JavaScript library for building user
            interfaces. Declarative: <strong>React</strong> makes it painless to
            create interactive UIs. Design simple views for each state ...
          </p>
          <p className="text-[#A9A297] text-sm pt-1">
            License: <span className="font-medium">MIT License</span>
          </p>
        </div>

        <div className="space-y-0.5 mt-9">
          <p className="text-[#C7C6C3] text-sm">
            https://www.w3schools.com › whatis › whatis_react
          </p>
          <p className="text-[#6997F4] text-xl hover:underline cursor-pointer">
            What is React - W3Schools
          </p>
          <p className="text-sm text-[#A9A297]">
            <strong>React</strong> is a JavaScript library created by Facebook.{' '}
            <strong>React</strong> is a User Interface (UI) library. React is a
            tool for building UI components ...
          </p>
        </div>

        <div className="space-y-0.5 mt-5 ml-4">
          <p className="text-[#C7C6C3] text-sm">
            https://www.w3schools.com › REACT › DEFAULT
          </p>
          <p className="text-[#6997F4] text-xl hover:underline cursor-pointer">
            React Tutorial - W3Schools
          </p>
          <p className="text-sm text-[#A9A297]">
            <strong>React</strong> is a JavaScript library for building user
            interfaces. <strong>React</strong> is used to build single-page
            applications. <strong>React</strong> allows us to create reusable UI
            ...
          </p>
        </div>

        <div className="space-y-0.5 mt-9">
          <p className="text-[#C7C6C3] text-sm">
            https://twitter.com › reactjs
          </p>
          <p className="text-[#6997F4] text-xl hover:underline cursor-pointer">
            React (@reactjs) / Twitter
          </p>
          <p className="text-sm text-[#A9A297]">
            <strong>React</strong> is a JavaScript library for building user
            interfaces. reactjs.org Joined July 2013.
          </p>
        </div>

        <div className="space-y-0.5 mt-9">
          <p className="text-[#C7C6C3] text-sm">
            https://www.merriam-webster.com › dictionary › react
          </p>
          <p className="text-[#6997F4] text-xl hover:underline cursor-pointer">
            React Definition & Meaning - Merriam-Webster
          </p>
          <p className="text-sm text-[#A9A297]">
            7 days ago — verb ; 1 · to exert a reciprocal or counteracting force
            or influence ; 2 · to change in response to a stimulus ; 3 · to act
            in opposition to a force ...
          </p>
        </div>

        <div className="mt-9 text-[#C7C6C3]">
          <p className="text-2xl">Related searches</p>
          <div className="flex mt-5 ml-9 space-y-2 items-center flex-col md:flex-row md:space-y-0 md:space-x-4">
            <div className="space-y-2">
              <button className="flex items-center pl-7 space-x-6 py-2.5 rounded-full bg-[#1F2223] w-[300px] hover:underline cursor-pointer">
                <MdSearch className="text-xl" />
                <span>
                  react <strong>tutorial</strong>
                </span>
              </button>
              <button className="flex items-center pl-7 space-x-6 py-2.5 rounded-full bg-[#1F2223]  w-[300px] hover:underline cursor-pointer">
                <MdSearch className="text-xl" />
                <span>
                  <strong>create</strong> react <strong>app</strong>
                </span>
              </button>
              <button className="flex items-center pl-7 space-x-6 py-2.5 rounded-full bg-[#1F2223]  w-[300px] hover:underline cursor-pointer">
                <MdSearch className="text-xl" />
                <span>
                  react <strong>hooks</strong>
                </span>
              </button>
              <button className="flex  items-center pl-7 space-x-6 py-2.5 rounded-full bg-[#1F2223] w-[300px] hover:underline cursor-pointer">
                <MdSearch className="text-xl" />
                <span>
                  react <strong>documentation</strong>
                </span>
              </button>
            </div>
            <div className="space-y-2">
              <button className="flex items-center pl-7 space-x-6 py-2.5 rounded-full bg-[#1F2223] w-[300px] hover:underline cursor-pointer">
                <MdSearch className="text-xl" />
                <span>
                  react <strong>w3schools</strong>
                </span>
              </button>
              <button className="flex items-center pl-7 space-x-6 py-2.5 rounded-full bg-[#1F2223] w-[300px] hover:underline cursor-pointer">
                <MdSearch className="text-xl" />
                <span>
                  react <strong>github</strong>
                </span>
              </button>
              <button className="flex items-center pl-7 space-x-6 py-2.5 rounded-full bg-[#1F2223] w-[300px] hover:underline cursor-pointer">
                <MdSearch className="text-xl" />
                <span>
                  react <strong>js</strong> react <strong>native</strong>
                </span>
              </button>
              <button className="flex items-center pl-7 space-x-6 py-2.5 rounded-full bg-[#1F2223] w-[300px] hover:underline cursor-pointer">
                <MdSearch className="text-xl" />
                <span>
                  react <strong>download</strong>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-11 pb-10 ml-20 md:ml-0 text-center flex flex-col items-center">
          <p className="text-4xl font-medium">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">ooooooooo</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </p>
          <div className="space-x-[0.71rem] pt-1 -translate-x-3 text-[#4BA0D2]">
            <span className="text-white">1</span>
            <span className="hover:underline cursor-pointer">2</span>
            <span className="hover:underline cursor-pointer">3</span>
            <span className="hover:underline cursor-pointer">4</span>
            <span className="hover:underline cursor-pointer">5</span>
            <span className="hover:underline cursor-pointer">6</span>
            <span className="hover:underline cursor-pointer">7</span>
            <span className="hover:underline cursor-pointer">8</span>
            <span className="hover:underline cursor-pointer">9</span>
            <span className="hover:underline cursor-pointer">10</span>
          </div>
          <div className="absolute translate-x-44 space-y-3.5 translate-y-[16px]">
            <AiOutlineRight className="text-[#4285F4]" />
            <p className="text-sm text-[#4BA0D2] hover:underline cursor-pointer">
              Next
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchResult;
