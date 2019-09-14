import React from 'react';
import Navigation from './components/Nav/index'
import Menu from './components/Menu/index'
import './App.css';
import './components/Styles/Menu/menu.css'
import {Route} from 'react-router-dom'
import About from './components/About/index.js'
import Skills from './components/Skills/index.js'
import Projects from './components/Projects/index.js'
import Blog from './components/Blog/index.js'
import Contact from './components/Contact/index.js'
import HyperPrism from './components/Projects/hyperPrism'
import Pickem from './components/Projects/pickem'

class App extends React.Component{

  updateHandler = () => {
      document.querySelector('.menu').classList.toggle('hidden'); 
  }
  screenHandler = () => {
      document.querySelector('.container').classList.toggle('hide')
  }

  render(){
    return ( 
      <div className="container hide">
          <Navigation updateHandler={this.updateHandler}/> 
          <div className='main-container'> 
              <Menu screenHandler = {this.screenHandler}/>   
              <div className='main-content'> 
                  <Route exact path='/About' component={About}/>
                  <Route exact path='/Skills' component={Skills}/>
                  <Route exact path='/Projects' component={Projects}/>
                  <Route exact path='/Blog' component={Blog}/>
                  <Route exact path='/Contact' component={Contact}/>
                  <Route exact path='/hyperPrism' component={HyperPrism}/>
                  <Route exact path='/pickem' component={Pickem}/> 
              </div>   
          </div>  
      </div> 
    );
  }
}

export default App;
