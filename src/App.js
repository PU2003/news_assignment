import React, { Component } from 'react';
import './App.css';
import { Routes,Route, BrowserRouter as Router ,Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  n = "prachi";
  render() {
    return (
      <Router>
        <div>
            <NavBar/>
            <Routes>
                 <Route exact path="/" element={<News key="general" pageSize={5} country="in" category="general"/>} />          {/*by using exact we are making sure that for /business only business runs not '/' which is general,which is possible because both are intiating with '/' */}
                <Route exact path="/business" element={<News key="business" pageSize={5} country="in" category="business"/>} />
                <Route exact path="/entertainment" element={<News key="entertainment" pageSize={5} country="in" category="entertainment"/>} />
                <Route exact path="/general" element={<News key="general" pageSize={5} country="in" category="general"/>} />
                <Route exact path="/health" element={<News key="health" pageSize={5} country="in" category="health"/>} />
                <Route exact path="/science" element={<News key="science" pageSize={5} country="in" category="science"/>} />
                <Route exact path="/sports" element={<News key="sports" pageSize={5} country="in" category="sports"/>} />
                <Route exact path="/technology" element={<News key="technology" pageSize={5} country="in" category="technology"/>} />
            </Routes>
        </div>
      </Router>
    );
  }
}

