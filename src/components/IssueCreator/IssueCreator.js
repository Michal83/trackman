import React from 'react';
import './IssueCreator.css';

const IssueCreator = (props) => {
  return (
    <div className="issue-creator">
      <h1 className="issue-creator__caption">Add new issue</h1>
      <input 
        type="text" 
        className="issue-creator__title" 
        name="title" 
        placeholder="Name your issue..." 
        value={props.newIssue.title} 
        onChange={props.handleNewIssue}/>
      <input 
        type="text" 
        className="issue-creator__description" 
        name="description" 
        placeholder="Write some description..." 
        value={props.newIssue.description} 
        onChange={props.handleNewIssue} />
      <div 
        className="btn issue-creator__btn" 
        onClick={props.addNewIssue}>
        Add
      </div>
    </div>
  );
}

export default IssueCreator;