import React from 'react';
import '../styles/concept.css';

const ConceptModal = ({ concept, onClose }) => {
  if (!concept) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="image-container">
          <img src={concept.icon} alt={concept.title} className="concept-image" />
        </div>

        <h2 className="concept-title">{concept.title}</h2>

        <div className="modal-body">
          {concept.sections?.map((section, index) => (
            <div key={index} className="content-section">
              <h3 className="section-title">{section.title}</h3>
              
              {Array.isArray(section.content) ? (
                <ul className="section-list">
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="section-text">{section.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConceptModal;