import React, { useContext } from 'react';
import { StatusBar, Text, View, Button } from 'react-native';
import { Context } from "../store/appContext"
import Song from "./song";


const Songs = ()=>{
  const { store }= useContext(Context) as any;
/*   const [lyric, setLyric]= useState(null); */
  
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
  
  let ListOfSongs = store.songs ? store.songs.map((song:any, index:number)=>{
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