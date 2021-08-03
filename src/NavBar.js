import React from 'react';
import {NavLink} from 'react-router-dom'

const nav_link = { 
width: '100px', 
padding:'12px', 
margin: '0 6px 6px', 
background: 'green', 
textDecoration: 'none', 
color: 'white'
}

class NavBar extends React.Component {
render() {
    return(
    <div>
        <NavLink
        to="/"
        exact
        style={nav_link}
        activeStyle={{
            background: "darkgreen"
        }}
        >
           Home
        </NavLink>
        
        <NavLink
        to="/book_reviews"
        exact
        style={nav_link}
        activeStyle={{
            background: "darkgreen"
        }}
        >
           Book Reviews
        </NavLink>
    </div>
    )
  }
}

export default NavBar