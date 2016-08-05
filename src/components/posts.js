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
    console.log(this.props.posts);

    return (
      <div id="postscontainer">
        <div id="posts">
          <Link to="/57a503230379422200b2ff9f" key="57a503230379422200b2ff9f" style={{ textDecoration: 'none' }}>
            <div id="pinnedpost">
              <div>
                Welcome to The Goldstein Blog! Click here to learn more about it!
              </div>
              <div id="pin">
                <i className="fa fa-map-marker" aria-hidden="true"></i> pinned post
              </div>
            </div>
          </Link>
          <br /><br />
          {this.props.posts.map((post) =>
            <Link to={`${post.id}`} id="postlink" key={post.id} style={{ textDecoration: 'none' }}>
              <div id="post">
                {post.title}
              </div>
            </Link>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
  }
);

// react-redux glue -- outputs Container that knows how to call actions
export default connect(mapStateToProps, actions)(Posts);
