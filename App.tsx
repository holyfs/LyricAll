import * as React from "react";
import { NativeRouter } from "react-router-native";
import { NativeBaseProvider, Text, Box } from "native-base";

import Layout from "./src/layout"


export default function App() {
  return (
    <>
      <NativeRouter>
        <NativeBaseProvider>
          <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
            <Text>
              <Layout />
            </Text>
          </Box>
        </NativeBaseProvider>
      </NativeRouter>
    </>
  );
}

