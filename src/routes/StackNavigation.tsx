import React from 'react';
import { TouchableOpacity } from 'react-native';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { Appbar, Avatar, useTheme } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { TabBottomNavigation } from './TabBottomNavigation';
import { DetailsScreen } from '../screens/DetailsScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackNavigation() {
    const theme = useTheme();

    return (
        <Navigator
            initialRouteName='FeedList'
            screenOptions={{
                animation: 'fade',
                header: ({ options, route, back, navigation }) => {
                    const title = options.headerTitle
                        ? options.headerTitle
                        : options.title
                            ? options.title
                            : route.name;

                    return (
                        <Appbar.Header
                            theme={{
                                colors: {
                                    primary: theme.colors.surface
                                }
                            }}
                            mode={'center-aligned'}
                        >
                            {!!back ? (
                                <Appbar.BackAction
                                    onPress={() => navigation.goBack()}
                                />
                            ) : (
                                <TouchableOpacity
                                    style={{ marginLeft: 16 }}
                                    onPress={() => {
                                        ((navigation as any) as DrawerNavigationProp<{}>).openDrawer();
                                    }}
                                >
                                    <Avatar.Image
                                        source={{
                                            uri: 'https://github.com/fermaiasoares.png'
                                        }}
                                        size={40}
                                    />
                                </TouchableOpacity>
                            )}
                            <Appbar.Content
                                // @ts-ignore
                                title={
                                    title === 'Feed' ? (
                                        <MaterialCommunityIcons
                                            style={{ marginRight: 16 }}
                                            name='twitter'
                                            size={40}
                                            color={theme.colors.primary}
                                        />
                                    ) : (title)
                                }
                                titleStyle={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: theme.colors.primary,
                                }}
                            />
                        </Appbar.Header>
                    )
                }
            }}
        >
            <Screen
                name='FeedList'
                options={({ route }) => {
                    const routeName = getFocusedRouteNameFromRoute(route);
                    return {
                        headerTitle: routeName
                    }
                }}
                component={TabBottomNavigation} />
            <Screen name='Details' component={DetailsScreen} />
        </Navigator>
    );
}