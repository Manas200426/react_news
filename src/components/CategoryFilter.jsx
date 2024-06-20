import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, fetchArticlesByCategory } from '../features/newsSlice';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.news.category);

  const handleChange = (e) => {
    const selectedCategory = e.target.value;
    dispatch(setCategory(selectedCategory));
    dispatch(fetchArticlesByCategory(selectedCategory));
  };

  return (
    <div className="my-4 relative">
      <select
        value={category}
        onChange={handleChange}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
      >
        <option value="">All Categories</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="entertainment">Entertainment</option>
        <option value="sports">Sports</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M7.293 8.293a1 1 0 011.414 0L10 10.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default CategoryFilter;
