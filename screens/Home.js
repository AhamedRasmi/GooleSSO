import { Text, View, TextInput, Button } from "react-native"
import Userfront from "@userfront/core";
import React from "react";

Userfront.init("demo1234");

// If the URL contains token & uuid params, log in
const Home = () => {

    // if (
    //     document.location.search.includes("token=") &&
    //     document.location.search.includes("uuid=")
    // ) {
    //     Userfront.login({ method: "link" });
    // }

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onSubmit = async (password, email) => {
        const payload = {
            password: password,
            emailOrUsername: email,
            tenantId: "6nz9wwmb",
            options: {}
        };

        const response = await fetch("https://api.userfront.com/v0/auth/basic", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })

            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.error(err));

    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={{ height: 50, width: '90%', borderWidth: 1, padding: 8 }}
            />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={setPassword}
                style={{ height: 50, width: '90%', borderWidth: 1, padding: 8, marginVertical: 12 }} />
            <Button
                title="sign in"
                onPress={() => onSubmit(password, email)}
            />
        </View>
    )
}

export default Home;