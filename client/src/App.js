import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
class App extends Component {

  constructor(props) {
    super(props);
    this.addMemberIdea = this.addMemberIdea.bind(this);
    this.state = {
      memberId: '',
      ideaId: ''
    }
  }

  onChangeMemberId = (event) => {
    this.setState({
      memberId: event.target.value
    })
  }

  onChangeIdeaId = (event) => {
    this.setState({
      ideaId: event.target.value
    })
  }

  addMemberIdea = () => {
    axios.post('/memberidea', {
        memberId: this.state.memberId,
        ideaId: this.state.ideaId
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }


  render() {
    return (
      <div className="App">
        <form>
          <input type="Text" placeholder="memberId" onChange={this.onChangeMemberId.bind(this)}></input>
          <input type="Text" placeholder="ideaId" onChange={this.onChangeIdeaId.bind(this)}></input>
        <button onClick={this.addMemberIdea}>addMemberIdea</button>
      </form>
      </div>
    );
  }
}

export default App;