import type {
    CompositeScreenProps,
    NavigatorScreenParams,
} from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';
import type { DrawerScreenProps as NativeDrawerScreenProps } from '@react-navigation/drawer';

export type DrawerParamsList = {
    Home: undefined;
}

export type HomeTabParamList = {
    Feed: undefined;
    Notifications: undefined;
    Teste: undefined;
};

export type RootStackParamList = {
    Splash: undefined;
    FeedList: NavigatorScreenParams<HomeTabParamList>;
    Details: undefined;
};

export type DrawerScreenProps<T extends keyof DrawerParamsList> =
    NativeDrawerScreenProps<DrawerParamsList, T>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
    CompositeScreenProps<
        MaterialBottomTabScreenProps<HomeTabParamList, T>,
        RootStackScreenProps<keyof RootStackParamList>
    >;

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}