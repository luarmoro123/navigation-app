import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerContentComponentProps, DrawerItemList } from '@react-navigation/drawer'

const CustonDrawer = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView
            {...props}
            scrollEnabled={false}
        >
            <View className='flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-blue-500'>
                <View className='flex justify-center bg-white rounded-full h-24 w-24' >
                    <Text className='text-primary font-work-black text-3xl text-center'>MR</Text>
                </View>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

export default CustonDrawer