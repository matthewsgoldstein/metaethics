import React, { Component } from 'react';

// example class based component (smart component)
class Navbar extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul>
          <a href="/">your site name</a>
          <br />
          <a href="posts/new">new post</a>
        </ul>
      </div>
    );
  }
}

export default Navbar;
