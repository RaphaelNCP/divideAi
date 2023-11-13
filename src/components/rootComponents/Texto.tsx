import { Text } from "react-native";
import {
  useFonts,
  Raleway_400Regular,
  Raleway_700Bold,
  Raleway_300Light,
  Raleway_600SemiBold,
} from "@expo-google-fonts/raleway";

export const NormalText = ({
  as,
  size,
  padding,
  margin,
  color,
}: {
  as: string;
  size?: number;
  padding?: number;
  margin?: number;
  color?: string;
}) => {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_400Regular,
  });

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <Text
      style={{
        fontSize: size,
        padding: padding,
        margin: margin,
        color: color,
        fontFamily: "Raleway_400Regular",
      }}
    >
      {as}
    </Text>
  );
};

export const BoldText = ({
  as,
  size,
  padding,
  margin,
  color,
}: {
  as: string;
  size?: number;
  padding?: number;
  margin?: number;
  color?: string;
}) => {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_600SemiBold,
  });

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <Text
      style={{
        fontSize: size,
        padding: padding,
        margin: margin,
        color: color,
        fontFamily: "Raleway_600SemiBold",
      }}
    >
      {as}
    </Text>
  );
};

export const LightText = ({
  as,
  size,
  padding,
  margin,
  color,
}: {
  as: string;
  size?: number;
  padding?: number;
  margin?: number;
  color?: string;
}) => {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_300Light,
  });

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <Text
      style={{
        fontSize: size,
        padding: padding,
        margin: margin,
        color: color,
        fontFamily: "Raleway_300Light",
      }}
    >
      {as}
    </Text>
  );
};

export const TitleText = ({
  as,
  size,
  padding,
  margin,
  color,
}: {
  as: string;
  size?: number;
  padding?: number;
  margin?: number;
  color?: string;
}) => {
  let [fontsLoaded, fontError] = useFonts({
    Raleway_700Bold,
  });

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <Text
      style={{
        textAlign: "center",
        fontSize: size,
        padding: padding,
        margin: margin,
        color: color,
        fontFamily: "Raleway_700Bold",
      }}
    >
      {as}
    </Text>
  );
};
