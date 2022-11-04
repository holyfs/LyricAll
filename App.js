import * as React from "react";
import { NativeRouter } from "react-router-native";

import Home from "./src/home";


export default function App() {
  return (<>
    <NativeRouter>
        <Home />
    </NativeRouter>
    </>
  );
}

