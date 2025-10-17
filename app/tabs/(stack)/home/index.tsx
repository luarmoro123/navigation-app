import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustonButton from "@/components/shared/CustonButton";
import { Link, router } from 'expo-router';

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <View className='px-10'>
                <CustonButton onPress={() => router.push('/tabs/(stack)/profile')} >
                    Perfil
                </CustonButton>
                <CustonButton color='secondary' onPress={() => router.push('/tabs/(stack)/sattings')} className='mb-3 mt-3'>
                    sattings
                </CustonButton>
                <CustonButton color='tertiary' onPress={() => router.push('/tabs/(stack)/products')} >
                    Productos
                </CustonButton>
                <CustonButton onPress={() => router.push('/tabs/(stack)/products')} variant='text-only' >
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