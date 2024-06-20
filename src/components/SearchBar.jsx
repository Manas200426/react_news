import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setKeyword, setPage, fetchArticlesByKeyword } from '../features/newsSlice';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setKeyword(input));
    dispatch(setPage(1));
    dispatch(fetchArticlesByKeyword({ keyword: input, page: 1 }));
  };

  return (
    <div className="flex flex-col justify-center items-center my-8">
      <h2 className="text-2xl font-bold mb-4">Search for Articles</h2>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter keywords..."
          className="px-4 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-r hover:bg-blue-700 transition duration-300"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
