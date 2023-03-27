import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const { Navigator, Screen } = createMaterialBottomTabNavigator();

import { FeedScreen } from '../screens/FeedScreen';
import { DetailsScreen } from '../screens/DetailsScreen';
import { FAB, Portal, useTheme } from 'react-native-paper';
import { RootStackScreenProps } from './rootStackParamList';
import { NavigationProp, RouteProp, useIsFocused, useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
    route: RouteProp<RootStackScreenProps<'FeedList'>>;
    navigation: NavigationProp<RootStackScreenProps<'FeedList'>>;
}

export function TabBottomNavigation(props: Props) {
    const theme = useTheme();
    const safeArea = useSafeAreaInsets();
    const isFocused = useIsFocused();
    const navigation = useNavigation();

    const routeIndex = props.navigation.getState().routes[0].state?.index;
    const routeName = props.navigation.getState().routes[0].state?.routeNames![routeIndex!] ?? 'Feed';
  
    let icon = 'feather';

    switch (routeName) {
        case 'Notifications':
            icon = 'email-plus-outline';
            break;
        default:
            icon = 'feather';
            break;
    }

    return (
        <>
            <Navigator
                initialRouteName='Feed'
                shifting={true}
                backBehavior={'initialRoute'}
                activeColor={theme.colors.primary}
                inactiveColor={theme.colors.secondary}
                sceneAnimationEnabled={true}
            >
                <Screen
                    name='Feed'
                    component={FeedScreen}
                    options={{
                        tabBarIcon: 'home',
                        tabBarColor: theme.colors.primary
                    }}
                />
                <Screen
                    name='Teste'
                    component={DetailsScreen}
                    options={{
                        tabBarIcon: 'home',
                        tabBarColor: theme.colors.surface
                    }}
                />
                <Screen
                    name="Notifications"
                    component={DetailsScreen}
                    options={{
                        tabBarIcon: 'bell-outline',
                        tabBarColor: theme.colors.surface
                    }}
                />
            </Navigator>
            <Portal>
                <FAB
                    visible={isFocused}
                    icon={icon}
                    style={{
                        position: 'absolute',
                        right: 16,
                        bottom: safeArea.bottom + 100
                    }}
                    color='white'
                    theme={{
                        colors: {
                            accent: theme.colors.primary,
                        },
                    }}
                    onPress={() => navigation.navigate('Details')}
                />
            </Portal>
        </>
    );
}