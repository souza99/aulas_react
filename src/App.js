import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    posts: [],
  };

  // Executa quando termina de montar o component "Render()"
  // Esse metodo é um life cicle
  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    //Faz a requisição para a API
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');

    const [posts] = Promise.all([postsResponse]);

    console.log(posts);

    //converte para json o response
    const postsJson = await posts.json();

    //tena na variavel do state
    this.setState({posts: postsJson});

  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
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
