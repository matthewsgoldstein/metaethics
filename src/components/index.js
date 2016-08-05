import React, { Component } from 'react';
import Posts from './posts';

// example class based component (smart component)
class Index extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <Posts />
    );
  }
}

export default Index;
