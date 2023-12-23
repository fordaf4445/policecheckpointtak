import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';
import Icon, { Icons } from '../Accessories/Icons';
import Colors from '../Accessories/Colors';

import AdminOfficerPage from '../AdminComponents/AdminOfficerPage';
import CheckingPage from '../AdminComponents/CheckingPage';
import HomePage from '../HomePageComponents/HomePage';
import ReportPage from '../HomePageComponents/ReportPage';

export type RootStackParamList = {
    AdminOfficerPage: undefined;
    CheckingPage: undefined;
    HomePage: undefined;
    ReportPage: undefined;
}

type DrawerProps = {
    navigation: DrawerNavigationHelpers;
}

type OpenDrawerProps = {
    openDrawer: () => void;
};

export type StackNavigation = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function OpenDrawer(open: OpenDrawerProps) {
    return (
        <TouchableOpacity onPress={() => { open.openDrawer() }} style={{ marginRight: 32 }}>
            <Icon type={Icons.Feather} name='menu' size={21} color='#000' />
        </TouchableOpacity>
    )
}

export function AdminComponents(props: DrawerProps) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="AdminOfficerPage"
                component={AdminOfficerPage}
                options={{
                    headerLeft: () => <OpenDrawer openDrawer={props.navigation.openDrawer} />
                }}
            />
            <Stack.Screen
                name="CheckingPage"
                component={CheckingPage} />
        </Stack.Navigator>
    )
}

export function HomePageComponents(props: DrawerProps) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomePage"
                component={HomePage}
                options={{
                    headerLeft: () => <OpenDrawer openDrawer={props.navigation.openDrawer} />
                }}
            />
            <Stack.Screen
                name="ReportPage"
                component={ReportPage} />
        </Stack.Navigator>
    )
}