
import "./App.css";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Posts from "./components/Posts";
import NewPostForm from "./components/MakePosts";
import SinglePostView from "./components/SinglePostView";
import Profile from "./components/Profile";
import TestComponent from "./components/TestComponent";

function App() {
  const { user, setToken, token } = useAuth();
  return (
    <div className="App">
      <NavBar user={user} setToken={setToken} />
      <Routes>
        <Route
          path="/auth/:method"
          element={<Register setToken={setToken} />}
        />
        <Route path="/" element={<Posts token={token} />} />
        <Route path="/profile" element={<Profile  />} />
        <Route path="/makepost" element={<NewPostForm token={token} />} />
        <Route
          path="/singlepost/:postId"
          element={<SinglePostView token={token} />}
        />
        <Route path="/testComponent" element={<TestComponent />}/>
      </Routes>
    </div>
  );
}

export default App;
