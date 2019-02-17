import React from 'react';
import './Issue.css';

const Issue = ({issue}) => {
  return (
    <div className="issue">
      <div className="issue__info">
        <h1 className="issue__info-title">{issue.title}</h1>
        <p className="issue__info-description">{issue.description}</p>
      </div>
      <div className="issue__status">{issue.state}</div>
    </div>
  );
}

export default Issue;