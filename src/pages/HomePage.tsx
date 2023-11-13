import { StatusBar } from "expo-status-bar";
import { Dimensions, Text, View } from "react-native";
import { Header } from "../components/Header";
import { Button } from "../components/rootComponents/Button";
import { TitleText } from "../components/rootComponents/Texto";

const height = Dimensions.get("window").height;

export const HomePage = ({ navigation }: { navigation: any }) => {
  return (
    <View
      style={{
        backgroundColor: "#F9F7F7",
        height: height,
        alignItems: "center",
      }}
    >
      <TitleText
        as="Bem vindo ao DivideAí"
        margin={30}
        size={40}
        color="#112D4E"
      />
      <Header />
      <View style={{ marginVertical: 20 }}>
        <Button
          text="Controle de conta"
          onPress={() => navigation.navigate("AccountControl")}
        />
        <Button
          text="Calcular gorjeta"
          onPress={() => navigation.navigate("TipCalculator")}
        />
        <Button
          text="Dividir Conta"
          onPress={() => navigation.navigate("SplitAccount")}
        />
        <Button text="Coming soon" />
      </View>
      <StatusBar hidden />
    </View>
  );
};
