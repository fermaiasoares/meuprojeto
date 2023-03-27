import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { DrawerNavigation } from './DrawerNavigation';

export function Routes(props: any) {

    return (
        <NavigationContainer>
            <DrawerNavigation />
        </NavigationContainer>
    )
}