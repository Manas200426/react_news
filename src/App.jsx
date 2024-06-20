import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Provider store={store}>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-blue-500 text-white py-4 text-center">
          <h1 className="text-3xl font-bold">React News Portal</h1>
        </header>
        <main>
          <HomePage />
        </main>
      </div>
    </Provider>
  );
}

export default App;
