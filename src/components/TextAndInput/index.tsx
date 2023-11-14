import { TextInput, View } from "react-native";
import { NormalText } from "../rootComponents/Texto";
import { styles } from "./TextAndImput";

export const TextAndInput = ({
  value,
  onChange,
  title,
  placeholder,
}: {
  value: string;
  onChange: (text: string) => void;
  title: string;
  placeholder: string;
}) => {
  return (
    <View style={styles.couvertContainer}>
      <NormalText as={title} size={25} padding={30} />
      <TextInput
        placeholder={placeholder}
        keyboardType="numeric"
        style={styles.input}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
};
