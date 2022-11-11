import React from 'react';
import { StatusBar, Text, View } from 'react-native';

const Song = (props:any)=>{
return(<>
    <StatusBar hidden={false} /> 
    <View style={{ padding: 24 }}>
        <Text>{props.song}</Text>    
    </View>  

</>

    );
};
export default Song;