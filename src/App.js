import { useTheme } from './context/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './pages/ProductDetails';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  const { theme } = useTheme();
  const [search, setSearch] = useState('');

  return (
    <div
      className={`min-h-screen p-4 sm:p-6 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      }`}
    >
      {/* Header with Search + Theme Toggle */}
      <Header search={search} setSearch={setSearch} />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<ProductList search={search} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
