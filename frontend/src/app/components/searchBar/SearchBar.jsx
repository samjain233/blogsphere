"use client";
import React, { useEffect, useState } from "react";
import searchKeywordApi from "../../../../api/SearchKeywordApi";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [searches, setSearches] = useState([]);

  const searchKeyword = async (keyword) => {
    const data = await searchKeywordApi({ keyword });
    console.log(data);
    if (data.success) {
      setSearches(data.data);
    }
  };

  const handleSearchClick = (slug) => {
    const url = process.env.NEXT_PUBLIC_FRONTEND + "blog/" + slug;
    window.location.href = url;
  };

  useEffect(() => {
    if (search.length > 3) {
      searchKeyword(search);
    } else {
      setSearches([]);
    }
  }, [search]);

  useEffect(() => {
    console.log(searches);
  }, [searches]);
  return (
    <>
      <div className="my-8 w-full flex flex-col justify-center items-center ">
        <input
          type="text"
          placeholder="Search for your fav blog..."
          className="p-2 border-2 border-black w-[60%]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {searches.map((element, index) => {
          return (
            <div
              key={index}
              className="w-[60%] flex flex-row justify-between items-center p-2 bg-gray-200 cursor-pointer hover:bg-gray-300"
              onClick={() => handleSearchClick(element.slug)}
            >
              <div>
                <p className="font-bold px-2">{element.title}</p>
              </div>
              <div className="px-2">
                <p>{element.category}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchBar;
