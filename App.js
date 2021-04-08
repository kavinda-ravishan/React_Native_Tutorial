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
      }}
    >
      <View
        style={{
          backgroundColor: "blue",
          //flexBasis: 100, //equalant to width: 100 in main axis horizontal
          //flexGrow: 1, //equalant to flex:1
          width: 400,
          flexShrink: 1, //if overflow shrink this item (equlent to flex:-1)
          height: 100,
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
    </View>
  );
}
