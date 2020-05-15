import React, { Component, Fragment } from 'react';
import Bar from './componenets/Bar';
import Navbar from './componenets/Navbar';
import './App.css';

class App extends Component {
  state = {
    numbers: []
  };

  randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function() {
      return Math.round(Math.random() * max);
    });
  }

  componentDidMount() {
    this.setState({ numbers: this.randomArray(20, 100) });
  }

  bubbleSort(test, length) {
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (test[j] >= test[j + 1]) {
          let c = test[j];
          test[j] = test[j + 1];
          test[j + 1] = c;
          this.setState({ numbers: test });
        }
      }
    }
  }

  render() {
    return (
      <Fragment>
        <Navbar className='navbar' />
        <div className='btn'>
          <button type="button" className="btn btn-dark" onClick={() => this.bubbleSort(this.state.numbers, 20)}>
            Bubble-Sort
          </button>
          <button type="button" className="btn btn-dark" onClick={() => alert("Not Yet Added")}>
            Quick-Sort
          </button>
          <button type="button" className="btn btn-dark" onClick={() => alert("Not Yet Added")}>
            Merge-Sort
          </button>
          <button type="button" className="btn btn-info"
            onClick={() =>
              this.setState({ numbers: this.randomArray(20, 100) })
            }>
            Reset
          </button>
        </div>

        <Bar numbers={this.state.numbers} />
      </Fragment>
    );
  }
}

export default App;
