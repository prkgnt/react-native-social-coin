import React, { useRef, useState } from "react";

import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: blanchedalmond;
`;
const Text = styled.Text``;
const TextInput = styled.TextInput`
  margin: 10px 10px;
  padding: 10px 10px;
  border-radius: 30px;
  background-color: burlywood;
`;
const InputBox = styled.View`
  margin-top: 30px;
`;
const Btn = styled.TouchableOpacity`
  padding: 10px 10px;
  margin: 20px 20px;
  align-items: center;
  border-width: 3px;
  border-color: gray;
  border-radius: 30px;
`;
const BtnText = styled.Text``;
const Join = () => {
  const passwordInput = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goNext = () => {
    passwordInput.current.focus();
  };
  return (
    <Container>
      <InputBox>
        <TextInput
          placeholderTextColor="white"
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
          placeholderTextColor="white"
          placeholder="Password"
          secureTextEntry
          value={password}
          returnKeyType="done"
          onChange={(text) => setPassword(text)}
        />
        <Btn>
          <BtnText>Create a account</BtnText>
        </Btn>
      </InputBox>
    </Container>
  );
};

export default Join;
