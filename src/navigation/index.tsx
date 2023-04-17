import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Screen } from '../constants';
import { Home } from '../screens';

export type HomeStackParamList = {
    Home: object;
};

const Stack = createStackNavigator<HomeStackParamList>();

export const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName={Screen.HOME} screenOptions={() => ({ headerShown: false })}>
            <Stack.Screen name={Screen.HOME} component={Home} />
        </Stack.Navigator>
    );
};