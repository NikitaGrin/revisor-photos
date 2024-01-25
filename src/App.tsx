import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Favorites from "./pages/Favorites";
import ErrorPage from "./pages/ErrorPage";
import "./styles.css";
import Layout from "./pages/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0 * 1000,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />

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
      </QueryClientProvider>
    </>
  );
}

export default App;
