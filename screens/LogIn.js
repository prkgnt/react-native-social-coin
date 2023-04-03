import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: blanchedalmond;
`;
const TextBox = styled.View`
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;
const Text = styled.Text`
  font-size: 18px;
  color: black;
`;
const Btn = styled.TouchableOpacity`
  border-radius: 30px;
  padding: 8px 20px;
  margin-top: 10px;
  background-color: burlywood;
`;
const BtnText = styled.Text`
  color: white;
  font-size: 18px;
`;
const LogIn = ({ navigation: { navigate } }) => {
  return (
    <Container>
      <TextBox>
        <Text>Don't have an account?</Text>
        <Btn onPress={() => navigate("Join")}>
          <BtnText>Join</BtnText>
        </Btn>
      </TextBox>
    </Container>
  );
};

export default LogIn;
