import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    counter: 0,
    posts: [
      {
        id: 1,
        title: 'O título 1',
        body: 'O corpo 1',
      },
      {
        id: 2,
        title: 'O título 2',
        body: 'O corpo 2',
      },
      {
        id: 3,
        title: 'O título 3',
        body: 'O corpo 3',
      }
    ],
  };
  timeoutUpdate = null;

  // Executa quando termina de montar o component "Render()"
  // Esse metodo é um life cicle
  componentDidMount() {
    this.handleTimeout();
  }

  // É um componente que Serve para atualizar a pagina
  // Esse metodo é um life cicle
  componentDidUpdate() {
    this.handleTimeout();
  }

  // É um componente que toda vez que o component for ser desmontado, ele é chamado para desmontar,
  // Quando acontece alguma alteração no componente, ele é chamado para desmontar "a tela por
  // exemplo"
  componentWillUnmount() {
    // usando "clearTimeout" para limpar a sugeira de dados que fica na telas
    clearTimeout(this.timeoutUpdate);
  }


  handleTimeout = () => {
    const { posts, counter } = this.state;

    posts[0].title = 'o titulo mudou';

    this.timeoutUpdate = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 });
    }, 1000);
  }


  render() {

    const { posts, counter } = this.state;

    return (
      <div className="App">
        <h1>{counter}</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
