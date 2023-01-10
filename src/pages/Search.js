import React from 'react';
import SearchFooter from '../components/SearchFooter';
import SearchNav from '../components/SearchNav';
import SearchResult from '../components/SearchResult';
import SearchSide from '../components/SearchSide';

function Search() {
  const result = +3690000000;

  return (
    <div className="relative min-h-[100vh] min-w-full">
      <div>
        <SearchNav />
        <hr className="mt-3 border-[#3A3E41]" />
        <div>
          <p className="text-[#9E9689] text-sm md:pl-[220px] pt-3">
            About {result.toLocaleString()} results (0.43 seconds)
          </p>
        </div>
        <div className="flex space-x-32 pb-10">
          <SearchResult />
          <div className="hidden xl:inline">
            <SearchSide />
          </div>
        </div>
      </div>
      <SearchFooter />
    </div>
  );
}

export default Search;
