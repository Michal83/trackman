import React from 'react';
import Issue from './Issue';
import './IssueList.css';

const IssueList = ({issues, changeState, handleStateEdit}) => {
  return (
    <div className="issue-list">
      {issues.map(i => <Issue key={i.id} issue={i} changeState={changeState} handleStateEdit={handleStateEdit} />)}
    </div>
  );
}

export default IssueList;