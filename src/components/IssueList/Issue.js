import React from 'react';
import IssueStateChanger from '../IssueStateChanger/IssueStateChanger';
import './Issue.css';

const Issue = ({issue, changeState, handleStateEdit}) => {
  // const stateChanger = issue.stateEdit ? <IssueStateChanger issue={issue} changeState={changeState} /> : null;
  return (
    <div className={`issue ${'issue--' + issue.state.toLowerCase()}`}>
      <div className="issue__info-container">
        <h1 className="issue__info-title">{issue.title}</h1>
        <p className="issue__info-description">{issue.description}</p>
      </div>
      <div className="issue__state-container">
        <div className={`issue__state ${'issue__state--' + issue.state.toLowerCase()}`} onClick={() => handleStateEdit(issue.id)}>
          {issue.state}
        </div>
        <IssueStateChanger issue={issue} changeState={changeState} />
      </div>
    </div>
  );
}

export default Issue;