import { Pressable, PressableProps, Text, View } from 'react-native'
import React, { Component } from 'react'


interface Props extends PressableProps {
    children: string
    color?: 'primary' | 'secondary' | 'tertiary'

    variant?: 'contained' | 'text-only'
    className?: string
}

const CustonButton = ({ children, color = 'primary', onPress, onLongPress, variant = 'contained', className }: Props) => {

    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary',
    }[color]
    const txtColor = {
        primary: 'text-primary',
        secondary: 'text-secndary',
        tertiary: 'text-tertiary',
    }[color]


    if (variant === 'text-only') {
        return (
            <Pressable
                className={`p-3 ${className}`}
                onPress={onPress}
                onLongPress={onLongPress}
            >
                <Text className={` text-center ${txtColor} font-work-medium`}>{children}</Text>
            </Pressable>
        )

    }
    return (
        <Pressable
            className={`p-3 rounded-md ${btnColor} active:opacity-90 ${className}`}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text className='text-white text-center font-work-medium'>{children}</Text>
        </Pressable>
    )
}

export default CustonButton