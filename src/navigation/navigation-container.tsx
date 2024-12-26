import React from 'react';
import {useRef} from 'react';
import {NavigationContainer as RNNavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SearchScreen} from '@/screens';

const MainStack = createStackNavigator();

export const NavigationContainer = () => {
  const navigationRef = useRef(null);

  return (
    <RNNavigationContainer ref={navigationRef}>
      <MainStack.Navigator>
        <MainStack.Screen
          name={'SearchScreen'}
          component={SearchScreen}
          options={{headerShown: false}}
        />
      </MainStack.Navigator>
    </RNNavigationContainer>
  );
};
