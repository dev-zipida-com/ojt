import React from "react";
import { Link } from "react-router-dom";

function PostList({ posts }) {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
