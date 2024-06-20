import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={article.urlToImage} alt={article.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          <Link to={`/article/${encodeURIComponent(article.title)}`}>{article.title}</Link>
        </div>
        <p className="text-gray-700 text-base">{article.description}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
