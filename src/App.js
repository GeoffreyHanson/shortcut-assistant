import React, { Component } from 'react';
// import KeyRecognition from './components/KeyRecognition/KeyRecognition';

class App extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      input: '',
      inputCount: 0,
      termCounter: 0,
      shortcuts: {
        cut: 'Controlc',
        paste: 'Controlv',
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
    const { input, shortcuts } = this.state;
    let { termCounter, inputCount } = this.state;

    // input key
    const { key } = event; // Control // c
    let keysPressed = input + key; // Control // Controlc

    // Counting the amount of inputs made
    inputCount += 1; // 1 // 2

    // Logging various information
    console.log(`Keys pressed: ${inputCount}`);
    console.log(key);
    console.log(Object.values(shortcuts)[termCounter]);
    console.log(`Term count: ${termCounter}`);
    console.log(`input: ${keysPressed}`);

    const shortcut = Object.values(shortcuts)[termCounter];

    if ((inputCount === 2) && (keysPressed === shortcut)) {
      console.log('Correct');
      // Change color of text to green for 1 second.
      termCounter += 1;
    } else if ((inputCount === 2) && (keysPressed !== shortcut)) {
      console.log('You failed!');
    }

    if (inputCount >= 2) {
      keysPressed = '';
      inputCount = 0;
      console.log('Reset!');
    }

    this.setState({
      input: keysPressed,
      inputCount,
      termCounter,
    });
  }

  render() {
    const {
      input,
      // inputCount,
      termCounter,
      shortcuts,
    } = this.state;
    return (
      <div className="App">
        <div />
        {/* Displaying the shortcut to press */}
        <div className="shortcutPrompt">{Object.values(shortcuts)[termCounter]}</div>
        <div className="inputDiv">{input}</div>
        <input
          type="text"
          ref={this.input}
          value={input}
          onKeyDown={(event) => this.onKeyDown(event)}
        />
        {/* <KeyRecognition
          input={input}
          inputCount={inputCount}
          shortcuts={shortcuts}
        /> */}
      </div>
    );
  }
}

export default App;
