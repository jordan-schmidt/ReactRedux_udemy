import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    //function called once component is loaded in DOM
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        Posts Index
      </div>
    );
  }
}

// alternate way to wire action creator instead of mapDispatchtoProps
export default connect(null, { fetchPosts })(PostsIndex);
