import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import History from "./src/screens/history";
import confirm from "./src/screens/confirm";
import NewsDetail from "./src/screens/news-detail";
import Date from "./src/screens/DATE1";
import Time from "./src/screens/TIME";
import Summary from "./src/screens/SUMMARY";
import Home from './src/screens/Home';
import DetailClinic from './src/screens/DetailClinic';
import EditProfile from './src/screens/EditProfile';
import Appointment from './src/screens/Appointment';
import MyProfile from "./src/screens/MyProfile"
import DATE1 from './src/screens/DATE1';
import TIME from './src/screens/TIME';

// Navigator Declaration
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Appointment":
              iconName = "calendar-text-outline";
              break;
            case "History":
              iconName = "time-circle-outline";
              break;
            case "Notification":
              iconName = "alarm-circle-outline";
              break;
            case "Profile":
              iconName = "person-circle-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={focused ? "black" : color}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
        },
        tabBarLabel: ({ children, color, focused }) => {
          return (
            <Text color={focused ? "black" : color} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={noHead} />
      <Tab.Screen name="Appointment" component={Appointment} options={noHead} />
      <Tab.Screen name="History" component={History} options={noHead} />
      <Tab.Screen name="Notification" component={NotificationScreen} options={noHead} />
      <Tab.Screen name="Profile" component={MyProfile} options={noHead} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Notification" component={NotificationScreen} />
          <Stack.Screen name="Tabs" component={TabNavigator} options={noHead} />
          <Stack.Screen name="News Detail" component={NewsDetail} options={noHead} />
          <Stack.Screen name="Date" component={Date} options={noHead} />
          <Stack.Screen name="Time" component={Time} options={noHead} />
          <Stack.Screen name="Summary" component={Summary} options={noHead} />
          <Stack.Screen name="History" component={History} options={noHead} />
          <Stack.Screen name="DetailClinic" component={DetailClinic} options={noHead} />
          <Stack.Screen name="EditProfile" component={EditProfile} options={noHead} />
          <Stack.Screen name="Appointment" component={Appointment} options={noHead} />
          <Stack.Screen name="Profile" component={MyProfile} options={noHead} />
          <Stack.Screen name="DATE1" component={DATE1} options={noHead} />
          <Stack.Screen name="TIME" component={TIME} options={noHead} />
          <Stack.Screen name="Confirm" component={confirm} options={noHead} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default AppNavigator;
