import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deletePostById, fetchPosts } from "../api/posts";
import styles from "../styles/Posts.module.css";

const Posts = ({ token }) => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const recievePosts = async () => {
      const display = await fetchPosts();
      setPosts(display.data.posts);
      console.log(display);
    };
    recievePosts();
  }, []);
  console.log(posts);
  // const deletePost = async () => {
  //   const result = await deletePostById(posts.post._id, token);
  //   console.log(posts.post._id);
  // };
  return (
    <div>
      {posts.map((post) => {
        return (
          <div className={styles.postsPage} key={post._id}>
            <div className={styles.postCard}>
              <p>User: {post.author.username}</p>
              <h3 className={styles.header}>{post.title}</h3>
              <p className={styles.description}>{post.description}</p>
              <p>{post.willDeliver}</p>
              <p className={styles.price}>Price: {post.price}</p>
              <div> {post.messages}</div>
              <button
                id={styles.button}
                className="pure-button pure-button-primary"
                onClick={() => {
                  navigate(`/singlepost/${post._id}`);
                }}
              >
                See Details
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
