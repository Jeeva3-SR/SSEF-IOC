import React, { useState, useMemo } from 'react';
import ConceptCard from './components/ConceptCard';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ConceptModal from './components/ConceptModal';
import concepts from './data/concepts';
//import './styles.css';

// Define categories with their associated concept matching logic
const categories = [
  { id: 'all', name: 'All' },
  { 
    id: 'architecture', 
    name: 'Architecture',
    matches: concept => concept.title.includes('Architecture') || 
                      concept.title.includes('Microservices') ||
                      concept.title.includes('Client-Server')
  },
  { 
    id: 'protocols', 
    name: 'Protocols',
    matches: concept => concept.title.includes('HTTP') || 
                      concept.title.includes('WebSockets') ||
                      concept.title.includes('Web Protocols')
  },
  { 
    id: 'security', 
    name: 'Security',
    matches: concept => concept.title.includes('Security') || 
                      concept.title.includes('XSS') ||
                      concept.title.includes('Authentication') ||
                      concept.title.includes('Vulnerabilities')
  },
  { 
    id: 'frameworks', 
    name: 'Frameworks',
    matches: concept => concept.title.includes('Express') || 
                      concept.title.includes('Node.js')
  },
  { 
    id: 'databases', 
    name: 'Databases',
    matches: concept => concept.title.includes('Databases')
  },
  { 
    id: 'apis', 
    name: 'APIs',
    matches: concept => concept.title.includes('API') || 
                      concept.title.includes('REST') ||
                      concept.title.includes('GraphQL')
  },
  { 
    id: 'devops', 
    name: 'DevOps',
    matches: concept => concept.title.includes('DevOps') || 
                      concept.title.includes('CI/CD') ||
                      concept.title.includes('Containerization')
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedConcept, setSelectedConcept] = useState(null);

  // Memoized filtered concepts for better performance
  const filteredConcepts = useMemo(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    
    return concepts.filter(concept => {
      // Search term matching
      const matchesSearch = 
        concept.title.toLowerCase().includes(lowerCaseSearchTerm) || 
        concept.description.toLowerCase().includes(lowerCaseSearchTerm) ||
        concept.sections?.some(section => 
          section.content.toLowerCase().includes(lowerCaseSearchTerm) ||
          (Array.isArray(section.content) && 
           section.content.some(item => item.toLowerCase().includes(lowerCaseSearchTerm)))
        );
      
      // Category matching
      const matchesCategory = 
        selectedCategory === 'all' || 
        categories.find(cat => cat.id === selectedCategory)?.matches(concept);
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="app">
      <Header />
      
      <div className="main-content">
        <div className="controls-container">
          <div className="controls">
            <SearchBar 
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm} 
              placeholder="Search concepts..."
            />
            <CategoryFilter 
              categories={categories} 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory} 
            />
          </div>
          
  
        </div>

        <div className="concepts-grid">
          {filteredConcepts.length > 0 ? (
            filteredConcepts.map((concept) => (
              <ConceptCard 
                key={concept.title} 
                concept={concept} 
                onConceptClick={setSelectedConcept}
              />
            ))
          ) : (
            <div className="no-results">
              <h3>No concepts found matching your search.</h3>
              <p>Try a different search term or category.</p>
              <button 
                className="reset-filters"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <ConceptModal 
        concept={selectedConcept} 
        onClose={() => setSelectedConcept(null)} 
      />
      
      <Footer />
    </div>
  );
}

export default App;