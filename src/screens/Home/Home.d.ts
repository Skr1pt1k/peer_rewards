import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackParamList } from 'navigation';
import { Screen } from '../../constants';

export type HomeProps = StackScreenProps<HomeStackParamList, Screen.HOME>;

declare const Home: React.FC<HomeProps>;

export default Home;
