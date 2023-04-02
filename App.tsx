import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { Routes } from './src/routes';
import { DarkTheme, LightTheme } from './src/global/themes';

export default function App() {
    return (
        <PaperProvider theme={LightTheme}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'transparent'}
                translucent />
            <Routes />
        </PaperProvider>
    )
}