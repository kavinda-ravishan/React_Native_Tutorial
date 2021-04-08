import React from "react";
import { View } from "react-native";

//flex:1 take all space
//flex:0.5 take half of space
//flex default direction is column (can change by flexDirection: "row")
//flexDirection: "row-reverse" items right to left
//flexDirection: "column-reverse" items bottom to top
export default function App() {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          backgroundColor: "blue",
          width: 100,
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
