import { BrowserRouter, Routes, Route } from "react-router";

import AppLayout from "./AppLayout"

import HomePage from "../Pages/HomePage"
import ExplorePage from "../Pages/ExplorePage"
import AuthorsPage from "../Pages/AuthorsPage"
import FavouritesPage from "../Pages/FavouritesPage"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route path="/" element={<HomePage/>} />
          <Route path="explore" element={<ExplorePage/>} />
          <Route path="authors" element={<AuthorsPage/>} />
          <Route path="favourites" element={<FavouritesPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
