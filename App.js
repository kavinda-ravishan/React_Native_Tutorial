import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        flexDirection: "row", //main axis is horizontal
        justifyContent: "center", //align item in main axis
        alignItems: "center", //align item in secondary axis (or each line)
        alignContent: "center", //align center in container not in line (only with wraping)
        flexWrap: "wrap", //prevent items shrinking
      }}
    >
      <View
        style={{
          backgroundColor: "blue",
          width: 100,
          height: 200,
        }}
      />
      <View
        style={{
          backgroundColor: "green",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gray",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "black",
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
