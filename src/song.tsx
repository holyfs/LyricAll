import React from 'react';
import { StatusBar, Text, View } from 'react-native';

const Song = (props:any)=>{
console.log(props);
return(<>
    <StatusBar hidden={false} /> 
    <View style={{ padding: 24 }}>
        <Text>{props}</Text>    
    </View>  

</>

    );
};
export default Song;