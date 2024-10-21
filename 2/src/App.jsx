import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterButton from "./components/CounterButton";
import RootLayout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { Routes, Route } from "react-router-dom";
import SimpleLayout from "./components/SimpleLayout";
import NotFound from "./pages/NotFound";

function App() {
  const menuItems = [
    {
      id: 1,
      label: "Home",
      url: "/",
      urlPattern: "/",
      element: <Home></Home>,
    },
    {
      id: 2,
      label: "Laboratorium 1",
      url: "/about",
      urlPattern: "/about",
      element: <About></About>,
    },
    {
      id: 3,
      label: "Laboratorium 2",
      url: "/product/1",
      urlPattern: "/product/:id",
      element: <Product></Product>,
    },
  ];

  return (
    <>
      <RootLayout items={menuItems}>
          <Routes errorElement={<NotFound></NotFound>}>
            {menuItems.map((i) => (
              <Route path={i.urlPattern} element={i.element} key={i.id}></Route>
            ))}
            <Route path="*" element={<NotFound></NotFound>}/>
          </Routes>
      </RootLayout>
    </>
  );
}

export default App;
