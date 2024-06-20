import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ArticleDetailPage = () => {
  const { title } = useParams();
  const article = useSelector((state) =>
    state.news.articles.find((article) => article.title === title)
  );

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-4">{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} className="w-full h-auto" />
      <p className="my-4">{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
        Read more
      </a>
    </div>
  );
};

export default ArticleDetailPage;
