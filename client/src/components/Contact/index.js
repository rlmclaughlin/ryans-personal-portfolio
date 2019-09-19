import React from 'react'
import '../Styles/Contact/contact.css'

export default class Contact extends React.Component{

    render(){
        return(
            <div className='contact-container'>
                <h1 className='mobile-header'>Contact Me</h1>   
                <div className='image'> 
                  <img alt="sun-glare" src='https://images.unsplash.com/photo-1556691421-cf15fe27a0b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'/>
                </div> 
                <hr/> 
                <div className='contact'>
                  <h1>Contact Me</h1> 
                  <p>Facebook: <a href='https://www.facebook.com/ryan.mclaughlin.9887'>Visit Here</a></p>
                  <p> Linked In: <a href='https://www.linkedin.com/in/ryan-mclaughlin-05a529188/'>Visit Here</a></p> 
                  <p>Phone: 972-974-8268</p>
                  <p>Email: rlmclaughlin@yahoo.com</p>
                </div>  
                     
            </div> 
        )
    }
}