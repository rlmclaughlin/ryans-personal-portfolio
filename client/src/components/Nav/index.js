import React from 'react'
import '../Styles/Nav/nav.css'

export default class Navigation extends React.Component{
    constructor(props){
        super(props); 
        this.state = {
            open: false
        }
    }

    clickHandler = (event) => {
        event.preventDefault(); 
        if(this.state.open === false){
            this.setState({
                open: true
            })
        }
    }

    render(){
        return(
            <div>
                <nav> 
                    <div> 
                      <i className="fas fa-bars" onClick={this.props.updateHandler} name='open'></i>
                      <h2>Ryan McLaughlin</h2>
                    </div> 
                    <div>
                      <a href='https://www.linkedin.com/in/ryan-mclaughlin-05a529188/'>
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a href='https://www.facebook.com/ryan.mclaughlin.9887'>
                        <i className="fab fa-facebook"></i>
                      </a> 
                      <a>
                        <i className="far fa-envelope"></i>
                      </a> 
                      <a href='https://github.com/rlmclaughlin'>
                        <i className="fab fa-github"></i>
                      </a>
                    </div> 
                </nav> 
            </div> 
        )
    }
}