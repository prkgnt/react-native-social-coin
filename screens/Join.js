import React, { useRef, useState } from "react";
import styled from "styled-components/native";
import auth from "@react-native-firebase/auth";
import { ActivityIndicator, Alert } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: blanchedalmond;
`;
const Text = styled.Text`
  text-align: center;
`;
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
  const [loading, setLoading] = useState(false);
  const passwordInput = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goNext = () => {
    passwordInput.current.focus();
  };

  const onSubmitLogin = async () => {
    if (email === "" || password === "") {
      return Alert.alert("Fill in the form");
    }
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmitPassword = async () => {
    if (email === "" || password === "") {
      return Alert.alert("Fill in the form");
    }
    if (loading) {
      return;
    }
    setLoading(true);

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      console.log(error);
    }
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
          onChangeText={(text) => setEmail(text)}
          onSubmitEditing={goNext}
        />
        <TextInput
          ref={passwordInput}
          placeholderTextColor="white"
          placeholder="Password"
          secureTextEntry
          value={password}
          returnKeyType="done"
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={onSubmitPassword}
        />

        <Btn onPress={onSubmitLogin}>
          {loading ? <ActivityIndicator /> : <BtnText>LogIn</BtnText>}
        </Btn>
        <Text>Or</Text>
        <Btn onPress={onSubmitPassword}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <BtnText>Create a account</BtnText>
          )}
        </Btn>
      </InputBox>
    </Container>
  );
};

export default Join;
