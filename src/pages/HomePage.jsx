import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopHeadlines, fetchArticlesByCategory, fetchArticlesByKeyword } from '../features/newsSlice';
import ArticleList from '../components/ArticleList';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.news.page);
  const category = useSelector((state) => state.news.category);
  const keyword = useSelector((state) => state.news.keyword);

  useEffect(() => {
    if (keyword) {
      dispatch(fetchArticlesByKeyword({ keyword, page }));
    } else if (category) {
      dispatch(fetchArticlesByCategory({ category, page }));
    } else {
      dispatch(fetchTopHeadlines({ page }));
    }
  }, [dispatch, category, keyword, page]);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Latest News</h1>
      <SearchBar />
      <CategoryFilter />
      <ArticleList />
      <Pagination />
    </div>
  );
};

export default HomePage;
