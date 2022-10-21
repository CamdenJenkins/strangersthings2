import { useEffect, useState } from "react";
import { fetchMe } from "./api/auth";
import "./App.css";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import { Routes, Route } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import Posts from "./components/Posts";
import NewPostForm from "./components/MakePosts";
import SinglePostView from "./components/SinglePostView";
import Profile from "./components/Profile.Jsx";

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
        <Route path="/makepost" element={<NewPostForm token={token} />} />
        <Route
          path="/singlepost/:postId"
          element={<SinglePostView token={token} />}
        />
        <Route path='/profile' element={<Profile user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
