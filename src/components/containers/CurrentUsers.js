import React, { Component } from 'react'
import { connect } from 'react-redux'

class CurrentUsers extends Component {
  render(){
    const users = this.props.user.all || []

  	return(
  	  <div style={{padding:24}}>	
          <h3 style={{marginBottom:0}}>Current Users</h3>
          <ol style={{padding:24, color:'red',fontSize:24}}>
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
  return {
    user: state.user
  }
} 

export default connect(stateToProps)(CurrentUsers)