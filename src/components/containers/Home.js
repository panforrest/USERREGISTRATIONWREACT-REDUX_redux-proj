import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class Home extends Component {
  constructor(){
  	super()
  	this.state={
  	  username: '',
  	  password: ''
  	}
  }

  updateVisitor(attr, event){
  	console.log(attr + ' == ' + event.target.value)

  	if (attr = 'username') {
  	  this.setState({
  	  	username: event.target.value
  	  })
  	}

  	if (attr = 'password') {
  	  this.setState({
  	  	password: event.target.value
  	  })
  	}
  }

  registerVisitor(){
  	console.log('registerVisitor: ' + JSON.stringify(this.state))
  	this.props.addUser(this.state)
  	.then(data => {
      console.log('USER CREATED: ' + JSON.stringify(data))
  	})
  	.catch(err => {
  	  alert('ERROR: ' + err.message)
  	})
  }

  render(){
  	console.log('RENDER!')
  	return (
      <div className="container">
        <h2>Sign Up</h2>
        <input onChange={this.updateVisitor.bind(this, 'username')} type="text" placeholder="username" /><br />
        <input onChange={this.updateVisitor.bind(this, 'password')} type="password" placeholder="password" /><br />
        <button onClick={this.registerVisitor.bind(this)}>Join</button>
      </div>
  	)
  }
}

const stateToProps = (state) => {
  return{
    // user: state.user
  }
}

const dispatchToProps = (dispatch) => {
  return{
  	addUser: (user) => dispatch(actions.addUser(user))
  }
}

export default connect(stateToProps, dispatchToProps)(Home)

