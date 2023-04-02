import * as React from "react";
import Userfront from "@userfront/core";
import { View, StyleSheet } from "react-native";
import SignupForm from "./components/Signup";
import SignupTest from "./screens/SignupTest";
import Home from "./screens/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <SignupTest />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});