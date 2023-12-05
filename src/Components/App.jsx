import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout/Layout";

const HomePage = lazy(() => import("../pages/HomePage"));
const CarsPage = lazy(() => import("../pages/CarsPage"));
const FavoriteCarsPage = lazy(() => import("../pages/FavoriteCarsPage"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CarsPage />} />
        <Route path="/favorites" element={<FavoriteCarsPage />} />
      </Route>
    </Routes>
  );
};
