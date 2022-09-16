import { StyleSheet, TextInput, Text, View } from "react-native";
import React from "react";

export default function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInValid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInValid]}
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {},
  label: {},
  labelInValid: {},
  input: {},
  inputInValid: {},
});
