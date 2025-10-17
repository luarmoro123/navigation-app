import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import HomeScreen from './home'

const Stacklayout = () => {
    return (
        <Stack
            screenOptions={{
                //headerShown: false,
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white',
                }
            }}
        >

            <Stack.Screen
                name='home/index'
                options={{
                    title: 'Inicio',
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
                    title: 'Ver Detalles',
                }}
            />

        </Stack>
    )
}

export default Stacklayout