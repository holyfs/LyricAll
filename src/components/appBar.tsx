import React from "react";
import { Button, StatusBar, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Box, HStack, Input, NativeBaseProvider, Icon  } from "native-base";

function AppBar() {
    return <>
      <NativeBaseProvider>
        <Box style={styles.container} safeAreaTop={true}>
          <StatusBar barStyle="default" hidden={false} />
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
      </NativeBaseProvider>
      </>;
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ECF0F1'
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
