import React from 'react';
import Issue from './Issue';
import './IssueList.css';

const IssueList = ({issues, changeState}) => {
  return (
    <div className="issue-list">
      {issues.map(i => <Issue key={i.id} issue={i} changeState={changeState} />)}
    </div>
  );
}

export default IssueList;