import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

// example class based component (smart component)
class Show extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      title: '',
      tags: '',
      content: '',
    };
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  render() {
    return (
      <div>Heyo</div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    state,
  }
);

export default connect(mapStateToProps, actions)(Show);
