import React from 'react';
import './IssueCreator.css';

const IssueCreator = ({ handleNewIssue, addCurrentIssue }) => {
  return (
    <div className="issue-creator">
      <h1 className="issue-creator__caption">Add new issue</h1>
      <input type="text" className="issue-creator__title" name="title" placeholder="Name your issue..." onInput={handleNewIssue}/>
      <input type="text" className="issue-creator__description" name="description" placeholder="Write some description..." onInput={handleNewIssue} />
      <div className="btn issue-creator__btn" onClick={addCurrentIssue}>Add</div>
    </div>
  );
}

export default IssueCreator;