import React from "react";
import { StatusBar, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants  from "expo-constants";
import { Box, HStack, Input, Icon  } from "native-base";

function AppBar() {
    return <>
        <StatusBar barStyle="default" hidden={false} />
          <Box style={styles.container}>
          <HStack justifyContent="space-between">
            <Text style={styles.textStyle}>
              Home
            </Text>
            <Input placeholder="Search" 
                  variant="filled" 
                  width="100%" 
                  borderRadius="4" 
                  py="1" px="2" 
                  InputLeftElement={<Icon ml="2" size="4" color="gray.400" 
                  as={<Ionicons name="ios-search" />} />} />
          </HStack>
        </Box>
      </>;
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ECF0F1',
      marginTop: Constants.statusBarHeight
    },
    buttonsContainer: {
      padding: 10
    },
    textStyle: {
      textAlign: 'center',
      marginBottom: 8,
      paddingLeft:5
    }
  });
export default AppBar;
