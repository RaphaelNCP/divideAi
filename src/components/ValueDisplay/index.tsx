import { TextInput, View } from "react-native";
import { BoldText, NormalText } from "../rootComponents/Texto";
import { styles } from "./ValueDisplay";

export const ValueDisplay = ({
  text,
  value,
}: {
  text: string;
  value: number;
}) => {
  return (
    <View style={styles.displayContainer}>
      <NormalText as={text} size={25} />
      <BoldText as={`R$ ${value.toFixed(2)}`} size={25} />
    </View>
  );
};
