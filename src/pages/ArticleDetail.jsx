import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = useSelector((state) =>
    state.news.articles.find((article, index) => index.toString() === id)
  );

  if (!article) {
    return <div className="text-center py-8 text-gray-600">Article not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
      <img
        src={article.urlToImage || 'https://via.placeholder.com/600'}
        alt={article.title}
        className="w-full h-auto object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-500 mb-4">{new Date(article.publishedAt).toLocaleDateString()}</p>
      <div className="text-gray-800 leading-relaxed text-lg mb-4">
        {article.description}
      </div>
      <div className="text-gray-700 text-base leading-relaxed">
        {article.content}
      </div>
    </div>
  );
};

export default ArticleDetail;
