import React from 'react'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from './firebaseconfigure'

class Signup extends React.Component{
    state={
        username:"",
        password:""
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClick=()=>{
        createUserWithEmailAndPassword(auth,this.state.username,this.state.password)
        .then((v)=>{
            console.log(v)
        }).catch((err)=>{
            console.log(err);
        })
    }
    render(){
        return(
            <div>
                <input type="text" placeholder='Enter email' value={this.state.username} name="username" onChange={this.handleChange} />
                <input type="password" placeholder='Enter password' value={this.state.password} name="password" onChange={this.handleChange} />
                <button onClick={this.handleClick}>Sigin</button>
            </div>
        )
    }
}
export default Signup;