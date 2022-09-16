import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { GlobalStyles } from "./src/expenseTracker/components/styles";
import AllExpenses from "./src/expenseTracker/screens/AllExpenses";
import ManageExpense from "./src/expenseTracker/screens/ManageExpense";
import RecentExpenses from "./src/expenseTracker/screens/RecentExpenses";
import IconButton from "./src/expenseTracker/UI/IconButton";
import ExpensesContextProvider from './store/context/expenses-context';

// import LoginScreen from "./src/authentication/screen/LoginScreen";
// import SignUpScreen from "./src/authentication/screen/SignUpScreen";
// import WelcomeScreen from "./src/authentication/screen/WelcomeScreen";


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All Expenses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

// function AuthStack() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: Color.primary70 },
//         headerTintColor: "white",
//         contentStyle: { backgroundColor: Color.gray700 },
//       }}
//     >
//       <Stack.Screen
//         name="Login"
//         component={LoginScreen}
//         options={{ title: "Login" }}
//       />

//       <Stack.Screen
//         name="Signup"
//         component={SignUpScreen}
//         options={{ title: "Sign Up" }}
//       />
//     </Stack.Navigator>
//   );
// }

// function AuthenticatedStack() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: Color.primary70 },
//         headerTintColor: "white",
//         contentStyle: { backgroundColor: Color.gray700 },
//       }}
//     >
//       <Stack.Screen
//         name="Welcome"
//         component={WelcomeScreen}
//         options={{ title: "Wel Come" }}
//       />
//     </Stack.Navigator>
//   );
// }

// function Navigation() {
//   return (
//     <NavigationContainer>
//       <AuthStack />
//     </NavigationContainer>
//   );
// }

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpense}
              options={{
                presentation: "modal", //how the screen is load
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
