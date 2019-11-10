import React, { Component } from 'react';
import KeyRecognition from './components/KeyRecognition/KeyRecognition';

class App extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      input: '',
      inputCount: 0,
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
    let { inputCount } = this.state;
    console.log(`input: ${input}`);

    // add to key count
    // check if total key count is at max
    // if it is at the max, clear key count and keys pressed

    // input key
    const { key } = event; // Control // c
    let keysPressed = input + key; // Control // Controlc

    if (inputCount >= 2) {
      keysPressed = '';
      inputCount = 0;
    }

    inputCount += 1; // 1 // 2
    console.log(inputCount);
    console.log(key);

    if (keysPressed === shortcuts.cut) {
      console.log('Correct!');
    }


    this.setState({
      input: keysPressed,
      inputCount,
    });
  }

  render() {
    const {
      input,
      // inputCount,
      shortcuts,
    } = this.state;
    return (
      <div className="App">
        <div>{shortcuts.cut}</div>
        <div className="inputDiv">{input}</div>
        <input
          type="text"
          ref={this.input}
          // value={input}
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
