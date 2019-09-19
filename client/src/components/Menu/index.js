import React from 'react';
import '../Styles/Menu/menu.css'
import {Link} from 'react-router-dom'

export default class Menu extends React.Component{

    render(){
        return(
            <div className='menu hidden'>
                <h2>Menu</h2>
                <Link to='/About' onClick={this.props.screenHandler}>About Me</Link>
                <Link to='/Skills'>Skills</Link>
                <Link to='Projects'>Projects</Link>
                <Link to='Blog'>Blog</Link>
                <Link to='Contact'>Contact</Link>    
            </div> 
        )
    }
}