import React from "react";
import { View } from "react-native";

//flex:1 take all space
//flex:0.5 take half of space
//flex default direction is column (can change by flexDirection: "row")
//flexDirection: "row-reverse" items right to left
//flexDirection: "column-reverse" items bottom to top

//justifyContent: "center" align item in primery axis (flexDirection: "row" therefor primary axis (---))
//justifyContent: "flex-start", default value
//justifyContent: "space-evenly"
export default function App() {
  return (
    <View
      style={{
        backgroundColor: "red",
        flex: 1,
        flexDirection: "row", //main axis is horizontal
        justifyContent: "center", //align item in main axis
        alignItems: "center", //align item in secondary axis
      }}
    >
      <View
        style={{
          backgroundColor: "blue",
          width: 100,
          height: 300,
          alignSelf: "flex-start",
        }}
      />
      <View
        style={{
          backgroundColor: "green",
          width: 100,
          height: 200,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
          alignSelf: "flex-end",
        }}
      />
    </View>
  );
}
