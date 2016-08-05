import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

class Posts extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log('the');
    console.log(this.props.state);

    return (
      <ul>
        {this.props.state.posts.all.map((post) =>
          <li><Link to={`${post.id}`} id="postlink" key={post.id}>{post.title}</Link></li>
        )}
      </ul>
    );
  }
}

const mapStateToProps = (state) => (
  {
    state,
  }
);

// react-redux glue -- outputs Container that knows how to call actions
export default connect(mapStateToProps, actions)(Posts);
