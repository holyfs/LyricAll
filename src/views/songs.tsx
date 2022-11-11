import React, { useEffect, useState } from 'react';
import { StatusBar, Text, View, Button } from 'react-native';
import Song from "./song";


const Songs = ()=>{
  const [data, setData]= useState<any[]>([]);
/*   const [lyric, setLyric]= useState(null); */
  
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

  /**
   * Function to return song url
  */
/*    const getLyric = (lyric:string) => {
    fetch(`https://lyrics-finder1.p.rapidapi.com/artists/${lyric}`, options)
    .then(response=>response.json());
    .then(songLyric => setLyric(songLyric));
    .catch(err => console.error(err))
  } */
  const showSong=(song:any)=>{  
    let lyric=song.uri
    let lyricWithOutHtml= lyric.replace(".html"," ");
    console.log(lyricWithOutHtml)
/*     getLyric(lyricWithOutHtml) */
  }
  
  let ListOfSongs = data ? data.map((song, index)=>{
    return <View key={index}><Button onPress={()=>showSong(song)} title={song.songName}></Button></View>}):<View><Text>...Loading</Text></View>

  return (<>
    <StatusBar hidden={false} /> 
    <View style={{ padding: 24 }}>
    {ListOfSongs}
    <Song song="eh"/>
    </View>
    </>
  );
};
export default Songs;