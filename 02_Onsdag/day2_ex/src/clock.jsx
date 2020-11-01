import React, { Component } from 'react';

class ShowDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <p>Date: {this.state.date.toLocaleTimeString()}</p>
        <button onClick={() => this.setState({ date: new Date() })}>
          Show date
          </button>
      </div>
    );
  }
}

export default ShowDate;