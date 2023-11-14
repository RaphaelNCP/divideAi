import React, { useState } from "react";
import { View } from "react-native";
import { NormalText } from "../../components/rootComponents/Texto";
import { Button } from "../../components/rootComponents/Button";
import { ValueField } from "../../components/ValueField";
import { styles } from "./TipCalculator";
import { ValueDisplay } from "../../components/ValueDisplay";
import { TextAndInput } from "../../components/TextAndInput";

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
      <ValueField value={billAmount} onChange={handleValueInputChange} />
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
            <TextAndInput
              title="Digite o valor do couvert:"
              placeholder="Insira o valor do couvert"
              value={couvertAmount}
              onChange={handleCouvertInputChange}
            />
          )
        ))}
      <View style={styles.container}>
        <Button
          size={250}
          text="Calcular 10% do garçom"
          onPress={handleCalculateTip}
        />
        <ValueDisplay text="Valor total da conta:" value={tipAmount} />
      </View>
    </View>
  );
};
