import React, { Component } from 'react';
import IssueCreator from '../components/IssueCreator/IssueCreator';
import IssueList from '../components/IssueList/IssueList';

import states from '../businessLogic/states';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [{id: 'Yo' ,title: 'Initial issue', description: 'Some description', state: 'Open'}],
      currentIssue: this.getInitialIssue()
    };

    this.getInitialIssue = this.getInitialIssue.bind(this);
    this.handleNewIssue = this.handleNewIssue.bind(this);
    this.addCurrentIssue = this.addCurrentIssue.bind(this);
    this.canAddIssue = this.canAddIssue.bind(this);
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
      currentIssue.id = currentIssue.title + currentIssue.description;
      currentIssue.state = states.OPEN;
      issues.push(currentIssue);
      this.setState({
        issues,
        currentIssue: this.getInitialIssue()
      });
    }
  }

  canAddIssue(issue) {
    return issue.title != '' && issue.description != '';
  }

  render() {
    return (
      <section className="main">
        <IssueCreator 
          handleNewIssue={(e) => this.handleNewIssue(e.target)} 
          addCurrentIssue={this.addCurrentIssue} 
          currentIssue={this.state.currentIssue} />
        <IssueList issues={this.state.issues} />
      </section>
    );
  }
}

export default App;