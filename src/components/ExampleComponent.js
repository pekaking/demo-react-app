import React, { Component } from 'react';

class Example extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Generic name'
    };
  }

  changeNameOfAuthor() {
    const names = ['Stefan', 'Milos', 'Jovan', 'Nikola', 'Milan', 'Petar'];
    this.setState({ name: names[Math.floor(Math.random() * names.length)] });
  }

  setNameOfAuthor(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div className="example-container">
        <div className="example-header">
          This is an example component built for demo React App.
          <br>
          </br>
          <br>
          </br>
          <a href="/">Home</a>
        </div>
        <div className="example-content">
          This app is built by {this.state.name}
        </div>
        <div className="example-content">
          <button onClick={this.changeNameOfAuthor.bind(this)}>Change name</button>
        </div>
        <div className="example-content">
          <input type="text" onChange={this.setNameOfAuthor.bind(this)} placeholder="enter name..." value={this.state.name}></input>
        </div>
      </div>
    );
  }
}

export default Example;
