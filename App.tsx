import 'react-native-gesture-handler';
import React from 'react';
import { Routes } from './src/routes';
import { StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
    return (
        <PaperProvider>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'transparent'}
                translucent />
            <Routes />
        </PaperProvider>
    )
}