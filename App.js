import React from "react";
import { View } from "react-native";

//flex:1 take all space
//flex:0.5 take half of space
export default function App() {
  return (
    <View
      style={{
        backgroundColor: "green",
        flex: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "blue",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "green",
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          flex: 1,
        }}
      />
    </View>
  );
}
