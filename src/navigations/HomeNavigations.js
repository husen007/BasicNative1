import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Contacts = () => {
  return (
    <Text>
      <Text>Hi from contacts</Text>
    </Text>
  );
};

const ContactsDetail = () => {
  return (
    <Text>
      <Text>Hi from Contact detail</Text>
    </Text>
  );
};

const CreateContacts = () => {
  return (
    <Text>
      <Text>Hi from Create contact</Text>
    </Text>
  );
};

const Settings = () => {
  return (
    <Text>
      <Text>Hi from Settings</Text>
    </Text>
  );
};

const HomeNavigations = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Contacts" component={Contacts}></HomeStack.Screen>
      <HomeStack.Screen
        name="Contact Detail"
        component={ContactsDetail}></HomeStack.Screen>
      <HomeStack.Screen
        name="Create Contact"
        component={CreateContacts}></HomeStack.Screen>
      <HomeStack.Screen name="Settings" component={Settings}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

export default HomeNavigations;
