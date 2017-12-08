import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
class App extends Component {

  constructor(props) {
    super(props);
    this.addMemberIdea = this.addMemberIdea.bind(this);
      this.getMember=this.getMember.bind(this);
    this.state = {
      memberId: '',
      ideaId: '',
  memberList:[]
    }
  }
  getMember=()=>{
    axios.get('http://localhost:8000/memberidea')
    .then((data)=>{
      this.setState({memberList:data})
      console.log(data);
    }).catch(function(error) {
      console.log(error);
    });
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
        <button onClick={this.getMember}> get list of member</button>
      </div>
    );
  }
}

export default App;
