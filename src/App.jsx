import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticleDetail from './pages/ArticleDetail';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">React News Portal</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
