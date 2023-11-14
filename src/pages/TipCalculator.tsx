import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import {
  BoldText,
  NormalText,
  TitleText,
} from "../components/rootComponents/Texto";
import { Button } from "../components/rootComponents/Button";

export const TipCalculator = () => {
  const [billAmount, setBillAmount] = useState<string>("");
  const [hasCouvert, setHasCouvert] = useState<boolean>(false);
  const [couvertAmount, setCouvertAmount] = useState<string>("");
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [clickedNo, setClickedNo] = useState<boolean>(false);
  const [tipAmount, setTipAmount] = useState<number>(0);

  const handleValueInputChange = (text: string) => {
    setBillAmount(text);
    text !== ""
      ? setIsFilled(true)
      : (setIsFilled(false), setHasCouvert(false), setClickedNo(false));
  };

  const handleCouvertInputChange = (text: string) => {
    setCouvertAmount(text);
  };

  const handleNoButtonClick = () => {
    setClickedNo(true);
  };

  const handleCalculateTip = () => {
    const bill = parseFloat(billAmount);
    const couvert = hasCouvert ? parseFloat(couvertAmount) : 0;

    if (!isNaN(bill) && !isNaN(couvert)) {
      const tip = bill * 0.1;
      const totalAmount = bill + couvert + tip;
      setTipAmount(totalAmount);
    } else {
      const currentBill = billAmount !== "" ? parseFloat(billAmount) : 0;
      const currentCouvert =
        couvertAmount !== "" ? parseFloat(couvertAmount) : 0;
      const tip = currentBill * 0.1;
      const totalAmount = currentBill + currentCouvert + tip;
      setTipAmount(totalAmount);
    }
  };

  return (
    <View>
      <TitleText
        as="Digite o valor da conta até agora:"
        size={30}
        margin={20}
        color="#112D4E"
      />
      <TextInput
        placeholder="Insira o valor da conta"
        keyboardType="numeric"
        style={styles.input}
        value={billAmount}
        onChangeText={handleValueInputChange}
      />
      {isFilled &&
        (!hasCouvert && !clickedNo ? (
          <View style={styles.couvert}>
            <NormalText as="Teve valor de couvert?" size={25} />
            <View style={styles.couvertButton}>
              <Button
                size={150}
                text="Sim"
                onPress={() => setHasCouvert(true)}
              />
              <Button size={150} text="Não" onPress={handleNoButtonClick} />
            </View>
          </View>
        ) : (
          !clickedNo && (
            <View style={styles.couvertContainer}>
              <NormalText
                as="Digite o valor do couvert:"
                size={25}
                padding={30}
              />
              <TextInput
                placeholder="Insira o valor do couvert"
                keyboardType="numeric"
                style={styles.input}
                value={couvertAmount}
                onChangeText={handleCouvertInputChange}
              />
            </View>
          )
        ))}
      <View style={styles.container}>
        <Button
          size={250}
          text="Calcular 10% do garçom"
          onPress={handleCalculateTip}
        />
        <NormalText as={`Valor total da conta:`} size={25} />
        <BoldText as={`R$ ${tipAmount.toFixed(2)}`} size={25} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: "#3F72AF",
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    width: "80%",
    alignSelf: "center",
  },
  couvert: {
    alignItems: "center",
    marginTop: 30,
  },
  couvertButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginTop: 10,
  },
  couvertContainer: {
    alignItems: "center",
  },
});
