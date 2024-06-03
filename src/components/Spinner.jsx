import React, { Component } from 'react';
import loading from './loading.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
         <img src={loading} alt="loading"/>               {/* imported loading gif is passed as an object and shown in the center */}
      </div>
    )
  }
}

export default Spinner

