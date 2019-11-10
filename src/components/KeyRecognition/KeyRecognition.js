import React from 'react';
import PropTypes from 'prop-types';

const KeyRecognition = (props) => {
  const { input, shortcuts } = props;

  if (input === shortcuts.testName) {
    return <p>It&apos;s a match!</p>;
  }
  return (
    null
  );
};

KeyRecognition.defaultProps = {
  input: PropTypes.string,
  shortcuts: PropTypes.objectOf(PropTypes.string),
};

KeyRecognition.propTypes = KeyRecognition.defaultProps;

export default KeyRecognition;
