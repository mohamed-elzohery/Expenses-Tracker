import React from 'react';
import { StatusBar, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ExpenseContextProvider from './context/expenseCtx/context';
import UIContextProvider from './context/UICtx/context';
import ErrorCTXProvider from './context/error/ErrorCtx';


// Screens
import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpense';
import ManageExpenses from './screens/ManageExpense';
import { GlobalStyles } from './constants/styles';
import IconBtn from './components/UI/IconBtn';

const Stack = createNativeStackNavigator();
const BottomNavigator = createBottomTabNavigator();

const ExpensesOverview = () => {
  const navigation = useNavigation();

  const onPressHandler = () => navigation.navigate("ManageExpenses");


  return (
    <BottomNavigator.Navigator screenOptions={
      {
        headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
        headerTintColor: '#FFF',
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        tabBarStyle: {backgroundColor: GlobalStyles.colors.primary500},
        tabBarInactiveTintColor: '#FFF',
        headerRight: ({tintColor}) => <IconBtn onPress={onPressHandler} color={tintColor} icon='add' size={30} container={{
          marginRight: 8
      }} />
      }
    }>
      <BottomNavigator.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={
          {
            title: 'Recent Expenses',
            tabBarLabel: 'Recent',
            tabBarIcon: ({color, size}) => <Icon color={color} size={size} name="hourglass" />,
            
          }
        }
      
      />
      <BottomNavigator.Screen name="AllExpenses" component={AllExpenses} 
      options={
        {
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({color, size}) => (
            <Icon color={color} size={size} name="calendar" />
          ),
      }}
      />
    </BottomNavigator.Navigator>
  );
};

const App = () => {
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={GlobalStyles.colors.primary500} />
      <UIContextProvider>
      <ExpenseContextProvider>
        <ErrorCTXProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={
              {
                headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
                headerTintColor: '#FFF',
              }
            }>
              <Stack.Screen
                name="ExpensesOverview"
                component={ExpensesOverview}
                options={{headerShown: false}}
              />
              <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
            </Stack.Navigator>
          </NavigationContainer>
        </ErrorCTXProvider>
      </ExpenseContextProvider>
      </UIContextProvider>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
