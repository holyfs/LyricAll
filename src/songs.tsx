import React, { useEffect, useState } from 'react';
import { StatusBar, Text, View, Button } from 'react-native';
import Song from "./song";


const Songs = ()=>{
  const [data, setData]= useState<any[]>([]);
  const [lyric, setLyric]= useState("");
  
  const options = {  
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b91f3eccdbmshc4638551fffa5fdp1ba5c6jsnf5654dcdc4d5',
      'X-RapidAPI-Host': 'lyrics-finder1.p.rapidapi.com'
    }
  };

  const getSongs = () => {
    fetch('https://lyrics-finder1.p.rapidapi.com/artists/avenged-sevenfold', options)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(err => console.error(err));
  }

  useEffect(() => {
    getSongs();
  }, []);
  console.log(data)

  /**
   * Function to return song url
  */
   const getLyric = async (html:any) => {
    await fetch(`https://lyrics-finder1.p.rapidapi.com/artists/avenged-sevenfold/${html}`, options)
    if(lyric){
      setLyric(lyric)
    }else{
      console.log(error)
    }
    
  }
 let songUri:string=""
  const showSong=(song:any)=>{
    songUri=song.uri
    return getLyric(songUri);
  }
  
  let ListOfSongs = data ? data.map((song, index)=>{
    return <View key={index}><Button onPress={()=>showSong(song)} title={song.songName}></Button></View>}):<View><Text>...Loading</Text></View>

  return (<>
    <StatusBar hidden={false} /> 
    <View style={{ padding: 24 }}>
    {ListOfSongs}
    <Song song={lyric}/>
    </View>
    </>
  );
};
export default Songs;