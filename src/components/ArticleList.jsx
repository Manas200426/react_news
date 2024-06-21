import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ArticleList = () => {
  const articles = useSelector((state) => state.news.articles);
  const status = useSelector((state) => state.news.status);
  const error = useSelector((state) => state.news.error);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
          <Link to={`/article/${index}`} className="block hover:underline">
            <img
              src={article.urlToImage || 'https://via.placeholder.com/300'}
              alt={article.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
              
            </div>
          </Link>
          <div className="p-4">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-4 block"
            >
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
