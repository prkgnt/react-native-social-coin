import React from "react";
import styled from "styled-components/native";
import auth from "@react-native-firebase/auth";

const Container = styled.View`
  flex: 1;
  background-color: gray;
`;
const Text = styled.Text``;
const Btn = styled.TouchableOpacity``;
const BtnText = styled.Text``;
const signOut = async () => {
  await auth().signOut();
};
const Home = () => {
  return (
    <Container>
      <Text>Home</Text>
      <Btn onPress={signOut}>
        <BtnText>Sign Out</BtnText>
      </Btn>
    </Container>
  );
};

export default Home;
