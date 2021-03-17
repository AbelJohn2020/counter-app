import React from 'react';
import PropTypes from  'prop-types';

function App({ sayHello, subtitle }) {
  return (
    <div className="App">
      <h1>{ sayHello }</h1>
      <p>{ subtitle }</p>
    </div>
  );
}

App.propTypes = {
  sayHello: PropTypes.string.isRequired,
}

App.defaultProps = {
  subtitle: 'I am a subtitle'
}

export default App;
