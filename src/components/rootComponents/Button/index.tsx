import { StyleSheet, TouchableOpacity, View } from "react-native";
import { NormalText } from "../Texto";

export const Button = ({
  text,
  onPress,
}: {
  text: string;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <NormalText as={text} color="#F9F7F7" size={20} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 50,
    backgroundColor: "#112D4E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 40,
  },
});
