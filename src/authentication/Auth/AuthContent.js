import { StyleSheet, Alert, View } from "react-native";
import React, { useState } from "react";
import AuthForm from "./AuthForm";
import FlatButton from "../UI/FlatButton";

export default function AuthContent({ isLogin, onAuthenticate }) {
  const [credentialIsInvalid, setCredentialIsInvalid] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    //todo
  }

  function submitHandler(credentials) {
    let { email, password, confirmPassword } = credentials;
    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsvalid = password.length > 6;
    const passwordAreEqual = password === confirmPassword;

    if (!emailIsValid || !passwordIsvalid || (!isLogin && !passwordAreEqual)) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialIsInvalid({
        email: !emailIsValid,
        password: !passwordIsvalid,
        confirmPassword: !passwordAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialIsInvalid={credentialIsInvalid}
      />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? "Create a new user" : "Log in instead"}
        </FlatButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  authContent: {},
  buttons: {},
});
