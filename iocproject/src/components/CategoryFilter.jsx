import React from 'react';
import '../styles/CategoryFilter.css';

const CategoryFilter = ({ categories, selectedCategory, setSelectedCategory }) => {
  return (
    <div className="category-filter">
      {categories.map(category => (
        <button
          key={category.id} 
          className={`filter-button ${selectedCategory === category.id ? 'active' : ''}`}
          onClick={() => setSelectedCategory(category.id)}
        >
          {category.name} 
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;