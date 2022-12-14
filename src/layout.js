import React from "react";
import { Route, Routes } from "react-router-native";
import { View } from "react-native"
import injectContext from "./store/appContext";

import  Home  from "./views/home.tsx";
import AppBar from "./components/appBar";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	

	return (
        <View>
            <AppBar />
            <Routes>
                <Route exact path="/" element={<Home />}>
                </Route>
                {/* 						<Route exact path="/Bio/:id" element={<Bio />}>	
						</Route> */}
            </Routes>
        </View>
	);
};

export default injectContext(Layout);