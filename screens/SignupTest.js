import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import Userfront from "@userfront/core";
import Alert from "../components/Alert";

Userfront.init("demo1234");

const SignupTest = () => {
    const [alert, setAlert] = React.useState();

    const onSubmit = async () => {
        setAlert(null);
        try {
            const res = await Userfront.signup({
                method: "google",
                redirect: false,
            })
            console.log(res)
        }
        catch (error) {
            console.log(error);
            setAlert(error.message);
        }
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Alert message={alert} />
            <Button
                onPress={() => onSubmit()}
                title="Sign up"
            />
        </View>
    )
}


export default SignupTest;