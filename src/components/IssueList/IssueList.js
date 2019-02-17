import React from 'react';
import Issue from './Issue';
import './IssueList.css';

const IssueList = ({issues}) => {
  return (
    <div className="issue-list">
      {issues.map(i => <Issue key={i.id} issue={i} />)}
    </div>
  );
}

export default IssueList;