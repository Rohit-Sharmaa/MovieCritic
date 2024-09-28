import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import AddMovie from "./components/AddMovie/AddMovie";
import MovieReview from "./components/MovieReview/MovieReview";
import "./index.css";
import MovieDetail from "./components/MovieCritic/MovieCritic";

const App: FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Card />} />

        <Route path="/movie" element={<AddMovie />} />

        <Route path="/review" element={<MovieReview />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
      </Routes>
    </>
  );
};

export default App;
