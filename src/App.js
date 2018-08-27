import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import logo from './logo.png';
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Vitamin from './components/Vitamin'
import ProductDetails from './components/ProductDetails'
import Error from './components/Error'

import data from './data/data.json'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleLogo: true,
      cards: []
    }
    this.toggleLogo = this.toggleLogo.bind(this);
    this.openNav = this.openNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  toggleLogo(event) {
    this.setState((prevState) => ({
      toggleLogo: !prevState.toggleLogo
    }));
  }

  openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  componentDidMount() {
    this.setState(prevState=>(
      {
        ...prevState,
        cards:data
      }
    ));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} 
              className={this.state.toggleLogo ? 'static-logo' : 'static-logo animated jello'} 
              alt="logo"
              onMouseEnter={this.toggleLogo}
              onMouseLeave={this.toggleLogo}
              onClick={this.openNav}
            />
            <h1
              className={this.state.toggleLogo ? 'menu-hidden' : 'menu animated bounceInDown'}
              onClick={this.openNav}
            >Menu</h1>
            <Navigation closeNav={this.closeNav} />
          </header>
          <Switch>
            {/* here cards is the props that is being passed to render={(props)} */}
            <Route exact path="/" render={(props) => {
              return <Home cards={this.state.cards} />
            }}/>
            <Route exact path="/vitamin" component={Vitamin}/>
            <Route exact path="/product/:id" render={(props)=>{
              let cardPosition = props.location.pathname.replace('/product/', '')
              return <ProductDetails card={this.state.cards[cardPosition]}/>
            }}/>
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
