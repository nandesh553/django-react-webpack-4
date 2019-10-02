import React from 'react';
import ReactDom from 'react-dom';
class TestApplication extends React.Component {
  render() {
    return (
    <div>
    <h1>Hello, ES6 and React!</h1>
    <p>
     Grab the code here : <a href="https://github.com/nandesh553/django-react-webpack-4" target="_blank">here</a>.
    </p>
    </div>
  );
 }
}
/*
 * Render the above component into the div#app
 */
ReactDom.render(<TestApplication />, document.getElementById('app'));