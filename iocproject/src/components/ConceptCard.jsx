import React from 'react';

const ConceptCard = ({ concept, onConceptClick }) => {
  return (
    <div className="concept-card" onClick={() => onConceptClick(concept)}>
      <div className="card-header">
        <img src={concept.icon} alt={concept.title} className="concept-icon" />
        <h3>{concept.title}</h3>
      </div>
    </div>
  );
};

export default ConceptCard;