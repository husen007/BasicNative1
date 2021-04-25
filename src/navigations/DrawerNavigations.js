import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Login = () => {
  return (
    <Text>
      <Text>Hi from contacts</Text>
    </Text>
  );
};

const SignUp = () => {
  return (
    <Text>
      <Text>Hi from Contact detail</Text>
    </Text>
  );
};

const DrawerNavigations = () => {
  const Drawer = createStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login}></AuthStack.Screen>
      <AuthStack.Screen name="Register" component={SignUp}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default DrawerNavigations;
