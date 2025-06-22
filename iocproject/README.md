import React, { useState } from 'react';
import ConceptCard from './components/ConceptCard';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
//import './styles.css';
import concepts from './data/concepts'
const categories = [
  'All',
  'Architecture',
  'Protocols',
  'Security',
  'Frameworks',
  'Databases',
  'APIs',
  'DevOps'
];


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredConcepts = concepts.filter(concept => {
    const matchesSearch = concept.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         concept.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || 
                           (selectedCategory === 'Architecture' && (
                             concept.title.includes('Architecture') || 
                             concept.title.includes('Microservices')
                           )) ||
                           (selectedCategory === 'Protocols' && (
                             concept.title.includes('HTTP') || 
                             concept.title.includes('WebSockets')
                           )) ||
                           (selectedCategory === 'Security' && (
                             concept.title.includes('Security') || 
                             concept.title.includes('XSS') ||
                             concept.title.includes('Authentication')
                           )) ||
                           (selectedCategory === 'Frameworks' && (
                             concept.title.includes('Express') || 
                             concept.title.includes('Node.js')
                           )) ||
                           (selectedCategory === 'Databases' && concept.title.includes('Databases')) ||
                           (selectedCategory === 'APIs' && (
                             concept.title.includes('API') || 
                             concept.title.includes('REST') ||
                             concept.title.includes('GraphQL')
                           )) ||
                           (selectedCategory === 'DevOps' && concept.title.includes('DevOps'));
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">
      <Header />
      <div className="controls">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter 
          categories={categories} 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
      </div>
      <div className="concepts-grid">
        {filteredConcepts.length > 0 ? (
          filteredConcepts.map((concept, index) => (
            <ConceptCard key={index} concept={concept} />
          ))
        ) : (
          <div className="no-results">
            <h3>No concepts found matching your search.</h3>
            <p>Try a different search term or category.</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;