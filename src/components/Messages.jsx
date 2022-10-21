import { useState } from "react";
import { postMessage } from "../api/posts";
import useAuth from "../hooks/useAuth";
const Messages = ({ postId }) => {
  const { token } = useAuth();
  const [message, setMessage] = useState("");
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const result = await postMessage(token, postId, message);
          console.log(result);
          return result;
        }}
      >
        <label>Message User:</label>
        <input
          value={message}
          type="text"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></input>
        <button className="pure-button pure-button-primary" type="submit">
          Send
        </button>
        <div>{}</div>
      </form>
    </div>
  );
};
export default Messages;
