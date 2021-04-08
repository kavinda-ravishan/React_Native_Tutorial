import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback,
  Button,
  Alert,
} from "react-native";

//solve SafeAreaView apple top notch problem
//<Image source={require("./assets/icon.png")} />
//https://picsum.photos/id/237/200/300
//TouchableWithoutFeedback : Make image Touchable
export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Click Me"
        onPress={() =>
          Alert.alert("My title", "My message", [
            {
              text: "Yes",
              onPress: () => {
                console.log("Yes");
              },
            },
            {
              text: "No",
              onPress: () => {
                console.log("No");
              },
            },
          ])
        }
        color="orange"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
