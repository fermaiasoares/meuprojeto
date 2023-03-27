import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    DrawerItem,
    createDrawerNavigator,
    DrawerContentComponentProps,
    DrawerContentScrollView
} from '@react-navigation/drawer';
import {
    Avatar,
    Caption,
    Drawer, Paragraph, Switch, Text, Title, TouchableRipple
} from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { Navigator, Screen } = createDrawerNavigator();

import { StackNavigation } from './StackNavigation';

const DrawerContent = (props: DrawerContentComponentProps) => {
    const navigation = useNavigation();

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <Avatar.Image
                        source={{
                            uri: 'https://github.com/fermaiasoares.png'
                        }}
                        size={50}
                    />
                    <Title style={styles.title}>Fernando Maia</Title>
                    <Caption style={styles.caption}>@fermaiasoares</Caption>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.section]}>202</Paragraph>
                            <Caption style={styles.caption}>Following</Caption>
                        </View>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.section]}>159</Paragraph>
                            <Caption style={styles.caption}>Followers</Caption>
                        </View>
                    </View>
                </View>
            </View>
            <Drawer.Section>
                <DrawerItem
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Início"
                    onPress={() => navigation.navigate('FeedList', { screen: 'Feed' })}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons name="tune" color={color} size={size} />
                    )}
                    label="Preferences"
                    onPress={() => navigation.navigate('FeedList', { screen: 'Notifications' })}
                />
                <DrawerItem
                    icon={({ color, size }) => (
                        <MaterialCommunityIcons
                            name="bookmark-outline"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Bookmarks"
                    onPress={() => navigation.navigate('Details')}
                />
            </Drawer.Section>
            <Drawer.Section title='Preferences'>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.preference}>
                        <Text>Dark Theme</Text>
                        <View pointerEvents="none">
                            <Switch value={false} />
                        </View>
                    </View>
                </TouchableRipple>
                <TouchableRipple onPress={() => { }}>
                    <View style={styles.preference}>
                        <Text>RTL</Text>
                        <View pointerEvents="none">
                            <Switch value={false} />
                        </View>
                    </View>
                </TouchableRipple>
            </Drawer.Section>
        </DrawerContentScrollView>
    )
};

export function DrawerNavigation() {
    return (
        <Navigator
            drawerContent={DrawerContent}
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen name={'Home'} component={StackNavigation} />
        </Navigator>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});