import { StyleSheet, View } from "react-native";
import { LightText, TitleText } from "../rootComponents/Texto";
import { styles } from "./Header";

export const Header = () => {
  return (
    <View style={styles.container}>
      <TitleText as="Escolha oque deseja:" size={25} color="#112D4E" />
      <LightText
        as="clique na opção abaixo que deseja acessar"
        color="#112D4E"
        size={15}
      />
    </View>
  );
};
