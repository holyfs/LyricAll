import React, { useEffect, useState } from 'react';
import { StatusBar, Text, View, Button } from 'react-native';


const Bands = ()=>{
  const [data, setData]= useState<any[]>([]);
  
  const options = {  
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b91f3eccdbmshc4638551fffa5fdp1ba5c6jsnf5654dcdc4d5',
      'X-RapidAPI-Host': 'lyrics-finder1.p.rapidapi.com'
    }
  };

  const getLyrics = () => {
    fetch('https://lyrics-finder1.p.rapidapi.com/artists/Avenged-Sevenfold', options)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(err => console.error(err));
  }

  useEffect(() => {
    getLyrics();
  }, []);
  console.log(data)

  const showSong=(song:number)=>{
    console.log("Entre", song);
  }
  
  let ListOfSongs = data ? data.map((song, index)=>{
    return <View key={index}><Button onPress={()=>showSong(index)} title={song.songName}></Button></View>}):<View><Text>...Loading</Text></View>

  return (<>
    <StatusBar hidden={false} /> 
    <View style={{ padding: 24 }}>
    {ListOfSongs}
    </View>
    </>
  );
};
export default Bands;