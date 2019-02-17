import React from 'react';
import {states} from '../../businessLogic/stateManager';
import './Issue.css';

const Issue = ({issue, changeState}) => {
  return (
    <div className={`issue ${'issue--' + issue.state.toLowerCase()}`}>
      <div className="issue__info-container">
        <h1 className="issue__info-title">{issue.title}</h1>
        <p className="issue__info-description">{issue.description}</p>
      </div>
      <div className={`issue__state ${'issue__state--' + issue.state.toLowerCase()}`} onClick={(id) => changeState(issue.id)}>{issue.state}</div>
    </div>
  );
}

export default Issue;