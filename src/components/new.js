import React, { Component } from 'react';

// example class based component (smart component)
class New extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div>
        This is where you make a new post. Whatever.
      </div>
    );
  }
}

export default New;
