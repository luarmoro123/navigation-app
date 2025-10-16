import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { products } from '@/store/products.store'

const ProductScreen = () => {

    const { id } = useLocalSearchParams()

    const product = products.find(p => p.id == id)

    if (!product) {
        return <Redirect href='/' />
    }

    return (
        <View className='px-5 mt-2'>
            <Text className='font-work-black text-3xl'>{product.title}</Text>
            <Text className='font-work-light mb-1 mt-1 '>{product.description}</Text>
            <Text className='font-work-medium'>{product.price}</Text>
        </View>
    )
}

export default ProductScreen