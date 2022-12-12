import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {1 + 1} Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  state = {
    name: "Joao Pedro",
    counter: 0,
  };

  handlePClick = () => {
    //# const { name } = this.state;
    this.setState({ name: 'Souza' });
  }

  // Usando arrow function, não precisamos de bind,
  // Errow function nãso tem "this"
  // Ela busca no elemento pai e encontra nosso this.state;
  handleAClick = (event) => {

    // Estou disendo para o react, que eu não quero que
    // o evento faça o que ele ia fazer, deixa eu decidir
    event.preventDefault();
    const { counter } = this.state
    this.setState({ counter: counter + 1 });
    console.log(this.state.counter);
  }

  render() {

    const { name, counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Este é o link
          </a>
        </header>
      </div>
    );
  }
}

export default App;
