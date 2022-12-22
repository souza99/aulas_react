import './App.css';
import { Component } from 'react';
import { PostCard } from './components/PostCard';

class App extends Component {

  state = {
    posts: [],
    photos: [],
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');

    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postJson = await posts.json();
    const photoJson = await photos.json();

    //FAZ UM "ZIP", une dois arrays, quando usamos, passamos o array menor primeiro
    //para fazer o map. No caso, o postJson
    const postsAndPhotos = postJson.map((post, index) => {
      return { ...post, cover: photoJson[index].url }
    });

    this.setState({ posts: postsAndPhotos });
  }

  render() {
    const { posts } = this.state;

    return (
      <section className='container'>
        <div className="posts">
          {posts.map(post => (
            <PostCard
            key={post.id}
            title = {post.title}
            body = {post.body}
            id = {post.id}
            cover = {post.cover}
            />
          ))}
        </div>
      </section>
    );

  }
}

export default App;
