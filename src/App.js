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
        <News/>
      </div>
    )
  }
}


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
