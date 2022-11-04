import React, { useEffect, useState } from 'react';
import { StatusBar, Text, View } from 'react-native';


const Bands = ()=>{
  const [data, setData]= useState([]);
  const options = {
    
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b91f3eccdbmshc4638551fffa5fdp1ba5c6jsnf5654dcdc4d5',
      'X-RapidAPI-Host': 'lyrics-finder1.p.rapidapi.com'
    }
  };

  const getMovies = () => {
    fetch('https://lyrics-finder1.p.rapidapi.com/artists/name/g', options)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(err => console.error(err));
  }

  useEffect(() => {
    getMovies();
  }, []);
  console.log(data);
  
  /* let ListOfBands = data.map((band:any, index:number)=>{
    return <View key={index}><Text>{band}</Text></View>}) */

  return (<>
    <StatusBar hidden={false} /> 
    <View style={{ padding: 24 }}>
{/*     <ListOfBands /> */}
    </View>
    </>
  );
};
export default Bands;