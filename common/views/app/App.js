import React, { PropTypes } from 'react';
import DevTools from './components/DevTools';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

require('../../../globalStyles/customBulma.scss');

const propTypes = {
  children: PropTypes.any
};

const App = (props) => {
  const devTools = process.env.NODE_ENV !== 'production' ? <DevTools /> : null;
  return (
    <div id="mainView">
      <Navigation {...props} />
      {props.children}
      <Footer />
      {devTools}
    </div>
  );
};

App.propTypes = propTypes;
export default App;