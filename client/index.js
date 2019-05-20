import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

console.log("React is running on ", process.env.NODE_ENV)

ReactDOM.render(<App />, document.getElementById('root'));