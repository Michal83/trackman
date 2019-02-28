import React, { Component } from 'react';
import Wrapper from '../containers/Wrapper/Wrapper';
import Header from '../components/Header/Header';
import IssueCreator from '../components/IssueCreator/IssueCreator';
import IssueList from '../components/IssueList/IssueList';

import {states, stateMachine} from '../businessLogic/stateManager';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: [],
      newIssue: this.getInitialIssue()
    };
  }

  getInitialIssue() {
    return {
      id: null,
      title: '',
      description: '',
      state: '',
      stateEdit: false
    };
  }

  handleNewIssue(target) {
    let newIssue = {...this.state.newIssue};
    newIssue[target.name] = target.value;
    this.setState({newIssue});
  }

  addNewIssue() {
    let newIssue = {...this.state.newIssue};
    let issues = [...this.state.issues];
    if (this.canAddIssue(newIssue)) {
      newIssue.id = new Date().getTime();
      newIssue.state = states.OPEN;
      issues.unshift(newIssue);
      this.setState({
        issues,
        newIssue: this.getInitialIssue()
      });
    }
  }

  canAddIssue(issue) {
    return issue.title && issue.description;
  }

  changeState(id, transitionName) {
    const issues = [...this.state.issues];
    for (let i of issues) {
      if (i.id == id) {
        stateMachine.doTransition(i, transitionName); 
        this.handleStateEdit(id);
        break;
      };
    };

    this.setState({issues});
  }

  handleStateEdit(id) {
    const issues = [...this.state.issues];
    for (let i of issues) {
      if (i.id == id) {
        i.stateEdit = !i.stateEdit;
      } else {
        i.stateEdit = false;
      }
    };

    this.setState({issues});
  }

  render() {
    return (
      <Wrapper>
        <Header />
        <section className="main">
          <IssueCreator 
            handleNewIssue={(e) => this.handleNewIssue(e.target)} 
            addNewIssue={() => this.addNewIssue()} 
            newIssue={this.state.newIssue} />
          <IssueList 
            issues={this.state.issues} 
            changeState={(id, transition) => this.changeState(id, transition)} 
            handleStateEdit={(id) => this.handleStateEdit(id)} />
        </section>
      </Wrapper>
    );
  }
}

export default App;