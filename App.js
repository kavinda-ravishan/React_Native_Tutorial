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
          width: 100,
          height: 100,
          top: 0,
          left: 0,
          //position: "relative", //default
          position: "absolute", //position relative to perant
          //green and yellow repositon
        }}
      />
      <View
        style={{
          backgroundColor: "green",
          width: 100,
          height: 100,
          //top: 20, //20 dip from top (-20 to top equlant to bottom:20)
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          //left: 20,
        }}
      />
    </View>
  );
}
