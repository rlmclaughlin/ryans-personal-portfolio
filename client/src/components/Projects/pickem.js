import React from 'react'
import '../Styles/Projects/pickem.css'


export default class Pickem extends React.Component{


    render(){
        return(
            <div className='showcase-container'>
                <h1>Pickem</h1>
                <div className='showcase-hr'> 
                  <hr className='hr'/>
                </div> 
                <div className='row-1'>
                  <div>
                    <h2>What is Pickem?</h2>
                    <p>An investment application that provides real-time stock information.</p> 
                    <a href='https://getpickem.co/'>Visit Site</a> 
                  </div> 
                  <div className='showcase-image'>
                    <img alt='pickem website logo' className='pickem-img'></img> 
                  </div> 
                </div> 
                <div className='showcase-hr'> 
                  <hr className='hr'/>
                </div>
                <div className='row-2'>
                  <div>
                    <h2>Built Using</h2>
                    <ul>
                      <li>HTML/CSS</li>
                      <li>Javascript</li>
                      <li>React</li>
                      <li>Node.js</li> 
                    </ul>
                    <ul className='built-using-list'>
                      <li>Stripe</li> 
                      <li>Firebase</li>
                      <li>Postgres</li>   
                    </ul>
                    <a href='https://github.com/Lambda-School-Labs/labspt2-investor-data-app'>Github Repo</a> 
                  </div> 
                  <div className='showcase-image'>
                    <img alt='pickem website' className='pickem-img-2'></img> 
                  </div> 
                </div>
                <div className='showcase-hr'> 
                  <hr className='hr'/>
                </div>
                <div className='contributions-container'>
                  <h2>Contributions</h2> 
                </div> 
            </div> 
        )
    }
}