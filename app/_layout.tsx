
import React, { useEffect } from 'react'
import { Slot, SplashScreen, Stack } from 'expo-router'
import "./global.css"
import { useFonts } from 'expo-font'


SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
    const [fontLoaded, error] = useFonts({
        'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
        'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
        'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf'),

    })

    useEffect(() => {
        if (error) throw error
        if (fontLoaded) SplashScreen.hideAsync()


    }, [fontLoaded, error])

    if (!fontLoaded && !error) return null

    return (
        <Slot />
    )
}

export default RootLayout