import React, { Component } from 'react';
import IssueCreator from '../components/IssueCreator/IssueCreator';
import IssueList from '../components/IssueList/IssueList';

import {states, stateMachine} from '../businessLogic/stateManager';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
      currentIssue: this.getInitialIssue()
    };

    this.getInitialIssue = this.getInitialIssue.bind(this);
    this.handleNewIssue = this.handleNewIssue.bind(this);
    this.addCurrentIssue = this.addCurrentIssue.bind(this);
    this.canAddIssue = this.canAddIssue.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  getInitialIssue() {
    return {
      id: null,
      title: '',
      description: '',
      state: ''
    };
  }

  handleNewIssue(target) {
    let currentIssue = {...this.state.currentIssue};
    currentIssue[target.name] = target.value;
    this.setState({currentIssue});
  }

  addCurrentIssue() {
    let currentIssue = {...this.state.currentIssue};
    let issues = [...this.state.issues];
    if (this.canAddIssue(currentIssue)) {
      currentIssue.id = new Date().getTime();
      currentIssue.state = states.OPEN;
      issues.push(currentIssue);
      this.setState({
        issues,
        currentIssue: this.getInitialIssue()
      });
    }
  }

  canAddIssue(issue) {
    return issue.title && issue.description;
  }

  changeState(id) {
    const issues = [...this.state.issues]; 
    issues.forEach(i => {
      if (i.id == id) {
        stateMachine.changeState(i); 
      };
    });

    this.setState({issues});
  }

  render() {
    return (
      <section className="main">
        <IssueCreator 
          handleNewIssue={(e) => this.handleNewIssue(e.target)} 
          addCurrentIssue={this.addCurrentIssue} 
          currentIssue={this.state.currentIssue} />
        <IssueList issues={this.state.issues} changeState={(id) => this.changeState(id)} />
      </section>
    );
  }
}

export default App;