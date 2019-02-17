const states = {
  OPEN: 'Open',
  PENDING: 'Pending',
  CLOSED: 'Closed'
}

const transitions = [
  {name: 'START', start: states.OPEN, end: states.PENDING, description: 'Start issue'},
  {name: 'KILL', start: states.PENDING, end: states.CLOSED, description: 'Finish issue'},
  {name: 'CLOSE', start: states.OPEN, end: states.CLOSED, description: 'Close issue'}
]

const stateMachine = {
  getTransitionsForIssue: (issue) => {
    return transitions.filter(t => t.start == issue.state);
  },

  doTransition: (issue, transitionName) => {
    let transition = transitions.filter(t => t.name == transitionName);
    if (transition.length > 0 && transition[0].start == issue.state) {
      issue.state = transition[0].end;
    };
  }
};

export {
  states,
  stateMachine
};