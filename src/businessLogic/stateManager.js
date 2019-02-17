const states = {
  OPEN: 'Open',
  PENDING: 'Pending',
  CLOSED: 'Closed'
}

const transitions = {
  [states.OPEN]: states.PENDING,
  [states.PENDING]: states.CLOSED
}

const stateMachine = {
  changeState: (issue) => {
    if (issue.state in transitions) {
      issue.state = transitions[issue.state]
    };
  }  
};

export {
  states,
  stateMachine
};