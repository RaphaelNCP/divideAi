import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/rootComponents/Button";
import { NormalText } from "../../components/rootComponents/Texto";
import { ValueDisplay } from "../../components/ValueDisplay";
import { TextAndInput } from "../../components/TextAndInput";
import { ValueField } from "../../components/ValueField";
import { styles } from "./SplitAccount";

export const SplitAccount = () => {
  const [billAmount, setBillAmount] = useState<string>("");
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [splitOption, setSplitOption] = useState<string | null>(null);
  const [isQuestionVisible, setIsQuestionVisible] = useState<boolean>(true);
  const [friendsAmount, setFriendsAmount] = useState<string>("");
  const [calculatedAmount, setCalculatedAmount] = useState<number | null>(null);
  const [percentages, setPercentages] = useState<number[]>([]);

  const handleValueInputChange = (text: string) => {
    setBillAmount(text);
    text !== ""
      ? setIsFilled(true)
      : (setIsFilled(false), setSplitOption(null), setIsQuestionVisible(true));
  };

  const handleFriendsAmountInputChange = (text: string) => {
    const integerValue = parseInt(text, 10);

    if (!isNaN(integerValue) || text === "") {
      setFriendsAmount(text);
      setPercentages([]);
    }
  };

  const handleEquallyButtonClick = () => {
    setSplitOption("equally");
    setIsQuestionVisible(false);
  };

  const handlePercentageButtonClick = () => {
    setSplitOption("percentage");
    setIsQuestionVisible(false);
  };

  const handleCalculateDivision = () => {
    if (splitOption === "equally") {
      if (friendsAmount !== "") {
        const bill = parseFloat(billAmount);
        const numberOfFriends = parseInt(friendsAmount, 10);

        if (!isNaN(bill) && !isNaN(numberOfFriends) && numberOfFriends !== 0) {
          const result = bill / numberOfFriends;
          setCalculatedAmount(result);
        }
      } else {
        setCalculatedAmount(parseFloat(billAmount));
      }
    }
  };

  const handlePercentageChange = (index: number, value: string) => {
    const percentageValue = parseFloat(value);
    const newPercentages = [...percentages];
    newPercentages[index] = !isNaN(percentageValue) ? percentageValue : 0;

    const totalPercentage = newPercentages.reduce(
      (sum, percentage) => sum + percentage,
      0
    );

    if (totalPercentage <= 100) {
      setPercentages(newPercentages);
    } else {
      alert("A soma das porcentagens não pode ultrapassar 100%");
    }
  };

  return (
    <View>
      <ValueField value={billAmount} onChange={handleValueInputChange} />
      {isFilled && isQuestionVisible && (
        <View style={styles.buttonContainer}>
          <View>
            <NormalText
              as="Deseja dividir a conta igualmente pelo número de pessoas ou por porcentagens individuais?"
              size={25}
            />
            <Button
              text="Igualmente"
              size={250}
              onPress={handleEquallyButtonClick}
            />
            <Button
              text="Porcentagem"
              size={250}
              onPress={handlePercentageButtonClick}
            />
          </View>
        </View>
      )}
      {splitOption === "equally" && (
        <View>
          <TextAndInput
            title="Entre quantos amigos deseja dividir a conta?"
            placeholder="Número de amigos"
            value={friendsAmount}
            onChange={handleFriendsAmountInputChange}
          />
          <View style={styles.container}>
            <Button
              size={250}
              text="Dividir conta"
              onPress={handleCalculateDivision}
            />
            <ValueDisplay
              text="Valor para cada:"
              value={calculatedAmount !== null ? calculatedAmount : 0}
            />
          </View>
        </View>
      )}
      {splitOption === "percentage" && (
        <View>
          <TextAndInput
            title="Entre quantos amigos deseja dividir a conta?"
            placeholder="Número de amigos"
            value={friendsAmount}
            onChange={handleFriendsAmountInputChange}
          />
          <ScrollView style={styles.scrollView}>
            {[...Array(parseInt(friendsAmount || "0", 10))].map((_, index) => (
              <View key={index}>
                <TextAndInput
                  title={`Porcentagem do amigo ${index + 1}`}
                  placeholder="Porcentagem"
                  value={
                    percentages[index] !== undefined
                      ? String(percentages[index])
                      : ""
                  }
                  onChange={(value) => handlePercentageChange(index, value)}
                />
                <Text style={styles.calculatedValue}>
                  Valor correspondente:{" "}
                  {percentages[index] !== undefined
                    ? (
                        parseFloat(billAmount) *
                        (percentages[index] / 100)
                      ).toFixed(2)
                    : 0}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};
