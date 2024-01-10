import React from 'react'
import { View, Text } from 'react-native'
import { formatDate } from '../../date'
import { Goal } from '..'

interface IProps {
    goal : Goal
}

export const GoalVisualizer = ({goal}: IProps) => {
    return (
        <View>
            <Text> Title: {goal.title}</Text>  
            <Text> Current Value: {goal.currentValue} </Text>
            <Text> Target Value: {goal.targetValue}</Text>
            <Text> Date: {formatDate(goal.targetDate)}</Text>  
        </View>

    )
}