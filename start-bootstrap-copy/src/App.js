import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor() {
    super()

    this.dropdown = React.createRef()
  }

  toggleShow = () => {
    console.log(this.dropdown.current)
    let {current} = this.dropdown;

    if (current.classList.contains('show-animation')) {
      current.classList.add('hide-animation')
      current.classList.remove('show-animation')
    } else {
      current.classList.add('show-animation')
      current.classList.remove('hide-animation')
    }
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <nav >
          <div id="nav-container">
            <div id='logo'>Start Bootstrap</div> 
            <button id='menu-button' onClick={this.toggleShow}>MENU <i className="fas fa-bars" /></button>
            <div id='big-menu'>
              <div className='links'>SERVICES</div>
              <div className='links'>PORTFOLIO</div>
              <div className='links'>ABOUT</div>
              <div className='links'>TEAM</div>
              <div className='links'>CONTACT</div>
            </div>
          </div>
        </nav>
        <div id='dropdown'  className='hide-animation' ref={this.dropdown}>
          <div className='links drop-links'>SERVICES</div>
          <div className='links drop-links'>PORTFOLIO</div>
          <div className='links drop-links'>ABOUT</div>
          <div className='links drop-links'>TEAM</div>
          <div className='links drop-links'>CONTACT</div>
        </div>

        <div className="welcome">
          <h2>Welcome To Our Studio</h2>
          <h1>IT'S NICE TO MEET YOU</h1>

          <button>TELL ME MORE</button>          
        </div>        
        
      </header>
    </div>
  );
}
}

export default App;
