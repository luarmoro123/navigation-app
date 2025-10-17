import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustonButton from "@/components/shared/CustonButton";
import { Link, router, useNavigation } from 'expo-router';
import { DrawerActions } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation()
    const onToggleDarwer = () => {
        navigation.dispatch(DrawerActions.toggleDrawer)


    }

    return (
        <SafeAreaView>
            <View className='px-10'>
                <CustonButton onPress={onToggleDarwer} className='mb-10' >
                    Abrir Menu
                </CustonButton>
                <CustonButton onPress={() => router.push('/home')} color='tertiary'>
                    Perfil
                </CustonButton>
                <CustonButton color='secondary' onPress={() => router.push('/sattings')} className='mb-3 mt-3'>
                    sattings
                </CustonButton>
                <CustonButton color='tertiary' onPress={() => router.push('/products')} >
                    Productos
                </CustonButton>
                <CustonButton onPress={() => router.push('/products')} variant='text-only' >
                    Productos
                </CustonButton>


                {/* <Link href='/products' className='mb-5'>Productos</Link>
                <Link href='/profile' className='mb-5'>Perfil</Link>
                <Link href='/sattings' className='mb-5' >Ajustes</Link> */}
            </View>

        </SafeAreaView>
    )

}

export default HomeScreen