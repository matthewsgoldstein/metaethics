import React, { Component } from 'react';
import { Link } from 'react-router';

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
        <div id="header">
          <Link to="/" id="name">The Goldstein Blog</Link>
          <div id="menu">
            <Link to="/" id="name"><i className="fa fa-home" aria-hidden="true"></i></Link>&nbsp;&nbsp;&nbsp;
            <Link to="/new" id="createlink"><i className="fa fa-plus" aria-hidden="true"></i></Link>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Navbar;
