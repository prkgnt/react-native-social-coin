import React, { useRef, useState } from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";

const Container = styled.View``;
const Text = styled.Text``;

const Join = () => {
  const passwordInput = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goNext = () => {
    passwordInput.current.focus();
  };
  return (
    <Container>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        returnKeyType="next"
        value={email}
        onChange={(text) => setEmail(text)}
        onSubmitEditing={goNext}
      />
      <TextInput
        ref={passwordInput}
        placeholder="Password"
        secureTextEntry
        value={password}
        returnKeyType="done"
        onChange={(text) => setPassword(text)}
      />
    </Container>
  );
};

export default Join;
