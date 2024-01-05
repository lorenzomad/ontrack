import React from 'react'
import { View, Text } from 'react-native'

interface IProps {
    goal : Goal
}

export const Goal = ({goal}: IProps) => {
    return (
        <View>
            <Text>{goal.name}</Text>
        </View>

    )
}