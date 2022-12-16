import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  state = {
    posts: [],
  };

  // Executa quando termina de montar o component "Render()"
  // Esse metodo é um life cicle
  componentDidMount() {
    this.loadingPosts();
  }

  loadingPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => this.setState({ posts: posts }));
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
