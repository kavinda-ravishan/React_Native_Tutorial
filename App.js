import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
} from "react-native";

//solve SafeAreaView apple top notch problem
//<Image source={require("./assets/icon.png")} />
//https://picsum.photos/id/237/200/300
//TouchableWithoutFeedback : Make image Touchable
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
      <TouchableNativeFeedback onPress={() => console.log("Image pressed")}>
        <View
          style={{ width: 200, height: 200, backgroundColor: "green" }}
        ></View>
      </TouchableNativeFeedback>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginVertical: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
