import { View, Text } from 'react-native'
import React from 'react'
import { router, Stack, useNavigation } from 'expo-router'
import HomeScreen from './home'
import { Ionicons } from '@expo/vector-icons'
import { DrawerActions, StackActions } from '@react-navigation/native'

const Stacklayout = () => {
    const navigation = useNavigation()

    const onHeaderLeftClick = (canGoBack: boolean | undefined) => {
        if (canGoBack) {
            router.back()
            return
        }
        navigation.dispatch(DrawerActions.toggleDrawer)

    }




    return (
        <Stack
            screenOptions={{
                //headerShown: false,
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white',
                },
                headerLeft: ({ tintColor, canGoBack }) =>
                    <Ionicons
                        name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
                        size={20}
                        className='mr-5'
                        onPress={() => onHeaderLeftClick(canGoBack)}
                    >

                    </Ionicons>
            }}
        >

            <Stack.Screen
                name='home/index'
                options={{
                    title: 'Home',
                }}
            />
            <Stack.Screen
                name='products/index'
                options={{
                    title: 'Products Screem',
                }}
            />
            <Stack.Screen
                name='profile/index'
                options={{
                    title: 'Profile Screem'
                }}
            />
            <Stack.Screen
                name='sattings/index'
                options={{
                    title: 'Sattings Screem'
                }}
            />
            <Stack.Screen
                name='products/[id]'
                options={{

                }}
            />

        </Stack>
    )
}

export default Stacklayout