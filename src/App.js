import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ResBody from "./components/ResBody";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Help from "./components/Help";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
import { lazy, Suspense } from "react";

const Groceries = lazy(() => import("./components/Groceries"));

const AppLayout = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <ResBody />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "restaurant/:resId",
        element: <ResMenu />,
      },
      {
        path: "groceries/",
        element: (
          <Suspense fallback={<h1>Groceries component is loading...</h1>}>
            <Groceries />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
