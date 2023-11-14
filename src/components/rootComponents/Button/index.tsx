import { StyleSheet, TouchableOpacity, View } from "react-native";
import { NormalText } from "../Texto";

export const Button = ({
  text,
  onPress,
  size,
}: {
  text: string;
  onPress?: () => void;
  size: number;
}) => {
  const styles = StyleSheet.create({
    container: {
      width: size,
      height: 50,
      backgroundColor: "#112D4E",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      marginTop: 40,
    },
  });
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <NormalText as={text} color="#F9F7F7" size={20} />
    </TouchableOpacity>
  );
};
