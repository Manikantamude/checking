import React from "react";
import {Link} from 'react-router-dom'

class Navigation extends React.Component{
    render(){
        return(
            <div>
              <Link to='/'>Login</Link>
              <Link to='/signup'>Signup</Link>
            </div>
        )
    }
}
export default Navigation;