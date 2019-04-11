import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import ChatRoom from './ChatRoom';
import Upload from './Upload';
import Dashboard from './Dashboard';
import TrainUsageInfo from './TrainUsageInfo';
import history from '../history';
import './stylesheets/App.css';


class App extends React.Component {
  state = {
    messages: [],
    member: {
      username: "You",
      color: "#fb7f0a"
    }
  }

  onSendMessage = (message) => {
    const messages = this.state.messages;
    messages.push({
      text: message,
      member: this.state.member
    })
    this.setState({messages: messages})
    this.props.sendMessage(message)
  }

  render() {
    // TODO: Add login page to route later
    return (
      <div className="App">
        <Router history={history}>
          <React.Fragment>
            <Header/>
            <Switch>
              <Route path="/" exact component={ChatRoom} />
              <Route path="/upload" exact component={Upload} />
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/info" exact component={TrainUsageInfo} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;

