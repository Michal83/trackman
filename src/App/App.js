import React, { Component } from 'react';
import IssueCreator from '../components/IssueCreator/IssueCreator';

import states from '../businessLogic/states';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
      currentIssue: {
        title: '',
        description: '',
        state: ''
      }
    };

    this.handleNewIssue = this.handleNewIssue.bind(this);
    this.addCurrentIssue = this.addCurrentIssue.bind(this);
    this.canAddIssue = this.canAddIssue.bind(this);
  }

  handleNewIssue(e) {
    let currentIssue = {...this.state.currentIssue};
    currentIssue[e.target.name] = e.target.value;
    this.setState({currentIssue});
  }

  addCurrentIssue() {
    let currentIssue = {...this.state.currentIssue};
    let issues = [...this.state.issues];
    if (this.canAddIssue(currentIssue)) {
      currentIssue.state = states.OPEN;
      issues.push(currentIssue);
      this.setState({issues});
    }
  }

  canAddIssue(issue) {
    return issue.title != '' && issue.description != '';
  }

  render() {
    return (
      <section className="main">
        <IssueCreator handleNewIssue={(e) => this.handleNewIssue(e)} addCurrentIssue={this.addCurrentIssue} />
      </section>
    );
  }
}

export default App;