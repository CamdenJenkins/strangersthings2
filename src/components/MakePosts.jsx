import { useState } from "react";
import { makePost } from "../api/posts";
import { useNavigate } from "react-router-dom";
import styles from "../styles/AddPost.module.css";

const NewPostForm = ({ token }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  return (
    <div className={styles.formCard}>
      <form
        // className="pure-form pure-form-stacked"
        className={styles.form}
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await makePost(
            token,
            title,
            description,
            price,
            willDeliver
          );
          navigate("/");
        }}
      >
        <h3 className={styles.header}>Create New Post</h3>
        <div className={styles.attributes}>
          <span>
            <label>Title:</label>
            <input
              value={title}
              type="text"
              placeholder="title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></input>
          </span>
          <span className={styles.price}>
            <label>Price:</label>
            <input
              value={price}
              type="text"
              placeholder="price"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            ></input>
          </span>
          <span>
            <label>Delivery:</label>
            <input
              checked={willDeliver}
              type="checkbox"
              onChange={(e) => {
                setWillDeliver(e.target.checked);
              }}
            ></input>
          </span>
        </div>
        <div>
          <label>Description:</label>
          <input
            value={description}
            type="text"
            placeholder=""
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>
        </div>
        <button className="pure-button pure-button-primary" type="submit">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default NewPostForm;
