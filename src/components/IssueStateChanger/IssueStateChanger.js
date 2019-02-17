import React from 'react';
import IssueState from './IssueState';

import {stateMachine} from '../../businessLogic/stateManager';
import './IssueStateChanger.css';

const IssueStateChanger = ({issue, changeState}) => {
  const transitions = stateMachine.getTransitionsForIssue(issue);
  const issueState = (<div className="issue__state-changer">
                        {transitions.map(t => <IssueState key={t.name} transition={t} id={issue.id} changeState={changeState} />)}
                      </div>);
                      
  return issue.stateEdit && transitions.length > 0 ? issueState : null;
}

export default IssueStateChanger;