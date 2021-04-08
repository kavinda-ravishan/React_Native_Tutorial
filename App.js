import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

//solve SafeAreaView apple top notch problem
export default function App() {
  const handlePress = () => console.log("text pressed !");

  //numberOfLines={1} wrap text on one line ...
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} numberOfLines={1} onPress={handlePress}>
        Open up App.js to start working on your app, Really Really long text
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
