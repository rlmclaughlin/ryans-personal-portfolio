import React from 'react'
import '../Styles/Projects/Projects.css'
import {Link} from 'react-router-dom'

export default class Projects extends React.Component{

    render(){
        return(
            <div className='project-container'> 
             <h1>Projects</h1> 
             <hr className='project-horizontal-rule'/> 

              <div className='project'>
                <h1>Pickem</h1>  
                <div className='project-image'>
                  <img alt='pickem site'className='project-img'></img> 
                </div>
                <p>A site for investors of all levels</p>
                <Link to='pickem'>Visit Pickem</Link>
              </div>  
              <div className='project'>
                <h1>Hyper Prism</h1>  
                <div className='project-image'>
                  <img alt='hyper prism site' className='project-img2'></img> 
                </div>
                <p>A game of intuition</p>
                <Link to='/hyperPrism'> Hyper Prism</Link>
              </div>   
            </div> 
        )
    }
}