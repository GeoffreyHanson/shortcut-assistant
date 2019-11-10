import React from 'react';
import PropTypes from 'prop-types';

// This should purely represent the result of the onKeyDown function.
const KeyRecognition = (props) => {
  const { input, shortcuts } = props;

  if (input === shortcuts.cut) {
    return <p>It&apos;s a match!</p>;
  }
  return (
    null
  );
};

KeyRecognition.defaultProps = {
  input: PropTypes.string,
  // inputCount: PropTypes.number,
  shortcuts: PropTypes.objectOf(PropTypes.string),
};

KeyRecognition.propTypes = KeyRecognition.defaultProps;

export default KeyRecognition;
