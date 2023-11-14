import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "./pages/HomePage";
import { SplitAccount } from "./pages/SplitAccount";

import { AccountControl } from "./pages/AccountControl";
import { TipCalculator } from "./pages/TipCalculator";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            title: "DivideAí",
            headerStyle: { backgroundColor: "#112D4E" },
            headerTintColor: "#F9F7F7",
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "center",
          }}
          component={HomePage}
        />
        <Stack.Screen
          name="AccountControl"
          options={{
            title: "Controle de Conta",
            headerStyle: { backgroundColor: "#112D4E" },
            headerTintColor: "#F9F7F7",
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "center",
          }}
          component={AccountControl}
        />
        <Stack.Screen
          name="TipCalculator"
          options={{
            title: "Calcular Gorjeta",
            headerStyle: { backgroundColor: "#112D4E" },
            headerTintColor: "#F9F7F7",
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "center",
          }}
          component={TipCalculator}
        />
        <Stack.Screen
          name="SplitAccount"
          options={{
            title: "Dividir Conta",
            headerStyle: { backgroundColor: "#112D4E" },
            headerTintColor: "#F9F7F7",
            headerTitleStyle: { fontWeight: "bold" },
            headerTitleAlign: "center",
          }}
          component={SplitAccount}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
