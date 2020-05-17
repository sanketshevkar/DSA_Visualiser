import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Bar extends Component {
    

  render(){
    return (
        this.props.numbers.map((num, index)=>(
          <div key={index} className="bar" style={{width: `${num}mm`}}>
          {num}
        </div>
        ))
      );
}
}

//Proptypes
Bar.propTypes = {
    numbers: PropTypes.array.isRequired
}

export default Bar;
