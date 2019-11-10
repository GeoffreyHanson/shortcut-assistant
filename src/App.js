import React, { Component } from 'react';
import KeyRecognition from './components/KeyRecognition/KeyRecognition';

class App extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      input: '',
      shortcuts: {
        testName: 'Shift', 
      },
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
    console.log(event.key);
    // console.log(key);
    this.setState({ input: event.key });
  }

  render() {
    const { input, shortcuts } = this.state;
    return (
      <div className="App">
        <div className="inputDiv">{input}</div>
        <input
          type="text"
          ref={this.input}
          // value={input}
          onKeyDown={(event) => this.onKeyDown(event)}
        />
        <KeyRecognition
          input={input}
          shortcuts={shortcuts}
        />
      </div>
    );
  }
}

export default App;
