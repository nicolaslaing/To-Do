import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Todo App</h1>
        </header>
        <p>
          Hello! It's time to check off some tasks...
        </p>
      </div>
    );
  }
}
export default App;

// dispatch(addTodo(text));
// dispatch(completeTodo(index));






// import React, { Component } from 'react';

// const App = () => (
//   <div>
//     My App
//   </div>
// );

// export default App;