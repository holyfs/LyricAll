import * as React from "react";
import { NativeRouter, Route, Routes } from "react-router-native";

import Home from "./src/home.jsx";

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </NativeRouter>
  );
}

