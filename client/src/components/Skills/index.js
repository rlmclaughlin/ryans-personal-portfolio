import React from 'react'
import '../Styles/Skills/skills.css'

export default class Skills extends React.Component{

    render(){

        return(
            <div className='skills-container'>
              <div className='skills-content'> 
                <h1>Skills</h1>   
              </div>  
              <div className='horizontal-rule-skills'> 
                <hr />
              </div> 
              <div className='skills-main-content'>
              <div className='skill-bubble'><span>HTML/CSS</span></div> 
              <div className='skill-bubble'>JavaScript</div>   
              <div className='skill-bubble'>React.js</div> 
              <div className='skill-bubble'>Node.JS</div> 
              <div className='skill-bubble'>Python</div> 
              <div className='skill-bubble'>ReactStrap</div> 
              </div> 
          </div>
        )
    }
}
