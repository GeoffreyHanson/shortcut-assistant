import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      input: '',
    };
  }

  componentDidMount() {
    this.onLoadFocusInput();
  }

  componentDidUpdate() {
    this.onLoadFocusInput();
  }

  onLoadFocusInput = () => {
    this.input.current.focus();
    console.log('Focused!');
  }

  onKeyDown = (event) => {
    console.log(event);
    // console.log(key);
  }

  render() {
    const { input } = this.state;
    return (
      <div className="App">
        <div className="inputDiv">{input}</div>
        <input
          type="text"
          ref={this.input}
          // value={input}
          onKeyDown={(event) => this.onKeyDown(event)}
        />
      </div>
    );
  }
}

export default App;
