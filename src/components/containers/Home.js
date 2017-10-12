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

  componentDidMount(){
  	// console.log('componentDidMount: ')
  	this.props.fetchUsers()
  	.then(data => {
  	  console.log('FETCH USERS: ' + JSON.stringify(data))
  	})
  	.catch(err => {
  	  alert('ERROR: ' + err.message)
  	})
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

   //  const list = (this.props.users == null) ? null : (

  	// this.props.users.map((user, i) => {
  	// 	return(
   //        <li key={i}> { user.username } </li>
  	// 	)
  	// }))

    const users = this.props.user.all || []

  	return (
      <div className="container">
        <h2>Sign Up</h2>
        <input onChange={this.updateVisitor.bind(this, 'username')} type="text" placeholder="username" /><br />
        <input onChange={this.updateVisitor.bind(this, 'password')} type="password" placeholder="password" /><br />
        <button onClick={this.registerVisitor.bind(this)}>Join</button>
        <h3>Current Users</h3>
          <ol>
	        { users.map((user, i) => {
	          return <li key={user.id}>{user.username}</li>
	          })
	        }
	      </ol>  
      </div>
  	)
  }
}

const stateToProps = (state) => {
  return{
    user: state.user
  }
}

const dispatchToProps = (dispatch) => {
  return{
  	addUser: (user) => dispatch(actions.addUser(user)),
  	fetchUsers: (params) => dispatch(actions.fetchUsers(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Home)

