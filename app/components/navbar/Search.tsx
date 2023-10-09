"use client";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    // search section container with rounded edges
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      {/* main container for the items */}
      <div className="flex flex-row items-center justify-between">
        {/* first item  */}
        <div className="text-sm font-semibold px-6">Anywhere</div>
        {/* second item hidden on small devices  */}
        <div className="hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center ">
          Any Week
        </div>
        {/* third item */}
        <div className="text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3 ">
          {/* hidden on small devices  */}
          <div className="hidden sm:block">Add Guests</div>
          {/* search btn always visible */}
          <div className="p-2 bg-rose-500 rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
