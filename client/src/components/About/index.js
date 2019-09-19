import React from 'react'
import '../Styles/About/about.css'

export default class About extends React.Component{


    render(){
        return(
            <div className='about-container'>
              <div className='about-content'> 
                <h1>About Me</h1> 
                <span className='content-mobile'> 
                  <p> Name: Ryan McLaughlin <br/>
                      Age: 31 <br /> 
                      Occupation: Web Developer </p> 
                </span>  
              </div> 
              <div className='about-me-image'></div>
              <div className='horizontal-rule'> 
                <hr />
              </div>
              <div className="about-main-content"> 
                <p>Greetings!
                  <br/> 
                  <br/>
                  My name is Ryan McLaughlin and I'm a 31 year old, web developer, from Dallas, Texas. Beginning in June, 2018, I began 
                  my computer science education with Lambda School. Currently, I'm scheduled to graduate in September, 2019. During my time 
                  at Lambda, I studied: HTML, CSS, JavaScript, React, Node.js, MySQLite, Python. 
                </p>
              </div> 
            </div> 
        )
    }
}