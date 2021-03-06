import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    //function called once component is loaded in DOM
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        // <li className='list-group-item' key={post.id}>
        //   <Link to={`/posts/${post.id}`}>
        //     {post.title}
        //   </Link>
        // </li>
        <Link to={`/posts/${post.id}`} key={post.id} style={{ textDecoration: 'none '}}>
          <li className='list-group-item'>
            {post.title}
          </li>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <div className='text-xs-right'>
          <Link className='btn btn-primary' to='/posts/new'>
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

// alternate way to wire action creator instead of mapDispatchtoProps
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
