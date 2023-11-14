import { TextInput, View } from "react-native";
import { TitleText } from "../rootComponents/Texto";
import { styles } from "./ValueField";

export const ValueField = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (text: string) => void;
}) => {
  return (
    <View>
      <TitleText
        as="Digite o valor da conta:"
        size={30}
        margin={20}
        color="#112D4E"
      />
      <TextInput
        placeholder="Insira o valor da conta"
        keyboardType="numeric"
        style={styles.input}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};
