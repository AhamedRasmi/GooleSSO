import * as React from "react";
import Userfront from "@userfront/core";
import {
  Text,
  SafeAreaView,
  TextInput,
  View,
  Button,
  StyleSheet,
  ToastAndroid
} from "react-native";

import Alert from "./Alert";
import AsyncStorage from "@react-native-async-storage/async-storage";

Userfront.init("demo1234");

const SignupForm = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [accountName, setAccountName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordVerify, setPasswordVerify] = React.useState('');
  const [alert, setAlert] = React.useState();

  const handleSuccess = async (res) => {
    setEmail(null);
    setAccountName(null);
    setPassword(null);
    setPasswordVerify(null);
    console.log(res);
    await AsyncStorage.setItem('DATA', res.tokens.access.value)
  };

  // Handle the form submission by calling Userfront.signup()
  // const handleSubmit = async () => {
  //   // Reset the alert to empty
  //   setAlert(null);
  //   // Verify that the passwords match
  //   if (password !== passwordVerify) {
  //     return setAlert("Passwords must match");
  //   }

  //   try {
  //     // Call Userfront.signup()
  //     const res = await Userfront.signup({
  //       method: "password",
  //       email,
  //       password,
  //       data: {
  //         accountName,
  //       },
  //       redirect: false,
  //     });
  //     handleSuccess(res);
  //   } catch (error) {
  //     console.log(error);
  //     setAlert(error.message);
  //   }
  // };

  const onSubmit = async (email, password, accountName) => {
    const payload = {
      email: email,
      password: password,
      username: "quadrobay",
      name: accountName,
      data: {
        custom: "data"
      },
      tenantId: "6nz9wwmb",
      options: {}
    };

    const response = await fetch("https://api.userfront.com/v0/auth/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    console.log(response.json());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Sign up!</Text>
      <SafeAreaView>
        <Alert message={alert} />
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email address"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          onChangeText={setAccountName}
          value={accountName}
          placeholder="Account name (custom field)"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          textContentType="password"
        />
        <TextInput
          style={styles.input}
          onChangeText={setPasswordVerify}
          value={passwordVerify}
          textContentType="password"
          placeholder="Re-type password"
        />
        <Button
          style={styles.button}
          onPress={() => onSubmit(email, password, accountName)}
          title="Sign up"
          accessibilityLabel="Sign up"
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  paragraph: {
    marginBottom: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 40,
    marginBottom: 12,
    padding: 8,
    borderWidth: 1,
  },
  button: {
    // marginBottom: 12,
    // padding: 8,
    marginTop: 50
  },
});

export default SignupForm;
