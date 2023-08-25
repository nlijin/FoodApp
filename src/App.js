import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ResBody from "./components/ResBody";
import Footer from "./components/Footer";

const AppLayout = () => (
  <div>
    <Header />
    <SearchBar />
    <ResBody />
    <Footer />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
