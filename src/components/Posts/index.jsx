import { PostCard } from "../PostCard";


export const Posts = ({ posts }) => {
    return(
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
    );
}