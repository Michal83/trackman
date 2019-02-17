import React from 'react';
import './IssueState.css';

const IssueState = ({id, transition, changeState}) => {
  return (
    <div className="issue-state" onClick={() => changeState(id, transition.name)}>
      {transition.description}
    </div>
  );
}

export default IssueState;