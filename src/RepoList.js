import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as RepoActions from './store/actions';

class RepoList extends React.Component {
  constructor() {
    super()
    this.state = {
      input:''
    }
  }

  render() {
    const {
      repos,
      loading
    } = this.props
    console.log(this.props)
    return (
      <div>
        <input 
          onChange={(event) => this.setState({input: event.target.value})} 
          type="text" 
          placeholder="username on github" />
        <button onClick={() => this.props.requestTodoList(this.state.input)}>Load user</button>
        {repos.hasSuccess ? (
          <div>
            <h2>{repos.data.name}</h2>
            <p>{repos.data.bio}</p>
            <img src={repos.data.avatar_url} alt="face" />
          </div>
          ) : null
        }
        { repos.loading && <p>Carregando...</p> }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  repos: state.repos,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(RepoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepoList);
