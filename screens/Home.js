import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import auth from "@react-native-firebase/auth";
import { useQuery } from "react-query";
import { coins } from "../api";
import { ActivityIndicator, FlatList } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: black;
  padding: 0px 5px;
`;
const Loader = styled.View`
  flex: 1;
  background-color: gray;
  justify-content: center;
  align-items: center;
`;
const Coin = styled.View`
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  flex: 0.31;
  margin: 7px 0px;
  padding: 20px 0px;
  border-radius: 5px;
`;
const CoinText = styled.Text`
  text-align: center;
  color: white;
  font-weight: 600;
`;
const Btn = styled.TouchableOpacity``;
const BtnText = styled.Text``;
const Icon = styled.Image`
  width: 40px;
  height: 40px;
`;

const signOut = async () => {
  await auth().signOut();
};
const Home = () => {
  const { isLoading, data } = useQuery("coins", coins);
  const [cleanData, setCleanData] = useState([]);
  useEffect(() => {
    if (data) {
      setCleanData(
        data.filter(
          (coin) =>
            coin.rank != 0 &&
            coin.is_active &&
            !coin.is_new &&
            coin.type == "coin"
        )
      );
    }
  }, [data]);
  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator color="black" />
      </Loader>
    );
  }
  return (
    <Container>
      <Btn onPress={signOut}>
        <BtnText>Sign Out</BtnText>
      </Btn>
      <FlatList
        keyExtractor={(item) => item.id}
        numColumns={3}
        //각 열마다의 스타일 지정
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        data={cleanData}
        renderItem={({ item }) => (
          <Coin>
            <Icon
              source={{
                uri: `https://coinicons-api.vercel.app/${item.symbol.toLowerCase()}`,
              }}
            />
            <CoinText>{item.symbol}</CoinText>
          </Coin>
        )}
      />
    </Container>
  );
};

export default Home;
