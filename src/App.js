import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';


export default class App extends Component {
  n = "prachi";
  render() {
    return (
      <div>
        
        <NavBar/>
        <News pageSize={5} country="in" category="general"/>
        
      </div>
    )
  }
}

