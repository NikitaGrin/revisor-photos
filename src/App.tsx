import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Favorites from "./pages/Favorites";
import ErrorPage from "./pages/ErrorPage";
import "./index.css";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Navigate replace to="catalog" />} />
            <Route index path="catalog" element=<Catalog /> />
            <Route index path="favorites" element=<Favorites /> />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
