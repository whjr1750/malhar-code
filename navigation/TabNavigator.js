import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Entypo';
import Home from "../screens/Home";
import AddLink from "../screens/AddLink";

const Tab = createBottomTabNavigator();

const BottomTabNavigator=()=>{
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'list'
                : 'add-to-list';
            } else if (route.name === 'AddLink') {
              iconName = focused ? 'list' : 'add-to-list';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="AddLink" component={AddLink} />
      </Tab.Navigator>
   
  );
}
export default BottomTabNavigator;