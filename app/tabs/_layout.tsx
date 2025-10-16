import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#0D47A1', /* tabBarShowLabel: false */ }}>

            <Tabs.Screen
                name="home/index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={'#1976D2'} />,
                }}
            />
            <Tabs.Screen
                name="favorites/index"
                options={{
                    title: 'favorites',
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="star-outline" color={'#1976D2'} />,
                }}
            />
        </Tabs>
    )
}

export default TabsLayout