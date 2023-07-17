import React from "react";
import { SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import Main from "./pages/Main/Main";
import Old from "./pages/Old/Old";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
  tabBarStyle: { backgroundColor: 'black' },
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptionStyle}>
        <Tab.Screen
          name="MainPage"
          component={Main}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="OldPage"
          component={Old}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="clock" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
