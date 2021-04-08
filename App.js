import React from "react";
import { StyleSheet, SafeAreaView, View, Dimensions } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

//{width: 150} 150Dip
export default function App() {
  //console.log(Dimensions.get("screen"));
  //console.log(Dimensions.get("window"));

  //console.log(useDimensions());
  //console.log(useDeviceOrientation());
  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          backgroundColor: landscape ? "dodgerblue" : "blue",
          width: "100%",
          height: "30%",
        }}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
