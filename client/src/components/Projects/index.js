import React from 'react'
import '../Styles/Projects/Projects.css'

export default class Projects extends React.Component{
    constructor(){
        super(); 
    }
    render(){
        return(
            <div className='project-container'> 
             <h1>Projects</h1> 
             <hr class='project-horizontal-rule'/> 

              <div className='project'>
                <h1>Pickem</h1>  
                <div className='project-image'>
                  <img class='project-img'></img> 
                </div>
                <p>A site for investors of all levels</p>
                <a href='#'>Visit Pickem</a>
              </div>  
              <div className='project'>
                <h1>Hyper Prism</h1>  
                <div className='project-image'>
                  <img class='project-img2'></img> 
                </div>
                <p>A game of intuition</p>
                <a href='#'>Hyper Prism</a>
              </div>   
            </div> 
        )
    }
}