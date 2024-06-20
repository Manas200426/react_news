import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage, fetchTopHeadlines, fetchArticlesByCategory, fetchArticlesByKeyword } from '../features/newsSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.news.page);
  const category = useSelector((state) => state.news.category);
  const keyword = useSelector((state) => state.news.keyword);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
    if (keyword) {
      dispatch(fetchArticlesByKeyword({ keyword, page: newPage }));
    } else if (category) {
      dispatch(fetchArticlesByCategory({ category, page: newPage }));
    } else {
      dispatch(fetchTopHeadlines({ page: newPage }));
    }
  };

  return (
    <div className="flex justify-center my-4">
      <h2 className="text-2xl font-bold mr-4">Pagination:</h2>
      <div className="flex">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-l transition duration-300 ${
            page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
        >
          Previous
        </button>
        {[1, 2, 3, 4, 5, 6].map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`mx-1 px-4 py-2 border rounded transition duration-300 ${
              page === pageNumber ? 'bg-blue-700 text-white' : 'bg-white hover:bg-blue-500 hover:text-white'
            }`}
          >
            {pageNumber}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page === 6}
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-r transition duration-300 ${
            page === 6 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
