import { Text, View } from "react-native";
import { ValueField } from "../components/ValueField";
import { useState } from "react";

export const SplitAccount = () => {
  const [billAmount, setBillAmount] = useState<string>("");
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const handleValueInputChange = (text: string) => {
    setBillAmount(text);
    text !== "" ? setIsFilled(true) : setIsFilled(false);
  };
  return (
    <View>
      <ValueField value={billAmount} onChange={handleValueInputChange} />
      {isFilled && <Text>{billAmount}</Text>}
    </View>
  );
};
