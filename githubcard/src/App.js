import React from 'react';
import axios from 'axios';
import GitCard from "./Components/GitCard";
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
`

class App extends React.Component{
  constructor() {
    super()
    this.state = {
      followers: [],
      data: {}
    };
  }

  componentDidMount(){
    axios
      .get('https://api.github.com/users/sonicemma')
      .then(res => {
        this.setState({
          data: res.data
        });
      })
      .catch(err => console.log(err.message));

      axios
        .get('https://api.github.com/users/sonicemma/followers')
        .then(res => {
                this.setState({followers: res.data})
          });
      };

  render() {
  return (
    <div className="App">
      <Title>{this.state.data.login}'s followers:</Title>
      <div className="gitCard">
          <GitCard props={this.state.followers} />
      </div>
    </div>
  )};
}

export default App;
