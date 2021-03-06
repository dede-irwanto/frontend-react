import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavComp from "./inc/NavComp";
import Home from "./pages/Home";
import CreatePost from "./pages/posts/Create";
import EditPost from "./pages/posts/Edit";
import IndexPost from "./pages/posts/Index";

const App = () => {
  return (
    <div>
      <NavComp />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<IndexPost />} />
          <Route path="/posts/create" element={<CreatePost />} />
          <Route path="/posts/edit/:id" element={<EditPost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
