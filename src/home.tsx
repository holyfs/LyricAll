import React from "react";
import { Route, Routes } from "react-router-native";
import Songs from "./songs";
import { StyleSheet } from "react-native";


const Home = ()=>{
    return(
      <Routes>
        <Route path="/" element={<Songs />} />
      </Routes>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Home; 