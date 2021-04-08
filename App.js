import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

//solve SafeAreaView apple top notch problem
//<Image source={require("./assets/icon.png")} />
//https://picsum.photos/id/237/200/300
//TouchableWithoutFeedback : Make image Touchable
export default function App() {
  return (
    <View style={[styles.container, backgroundStyle]}>
      <Text style={{ color: "red" }}>Inline Style</Text>
      <Text style={textStyle}>Pass style as object</Text>
    </View>
  );
}

const textStyle = { color: "green" };
const backgroundStyle = { backgroundColor: "orange" };

//StyleSheet.create validate props we pass Recomend to use
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
