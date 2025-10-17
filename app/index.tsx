import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, Redirect } from 'expo-router'

const index = () => {
    return (
        <Redirect href="/drawer" />
    )

    {/* <SafeAreaView>
            <View className='mt-6 mx-5'>
                <Text className='text-4xl '
                    style={{ fontFamily: 'WorkSans-Black' }}>Hola mundo</Text>
                <Text className='text-3xl font-work-black text-primary'>Hola mundo</Text>
                <Text className='text-2xl font-work-medium text-secondary'>Hola mundo</Text>
                <Text className='text-xl font-work-light text-tertiary'>Hola mundo</Text>
                <Text className='text-xl '>Hola mundo</Text>


                <Link href='/products'>
                    Products
                </Link>
            </View>
        </SafeAreaView> */}



}

export default index