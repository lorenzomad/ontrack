import React, { useEffect, useState } from "react"
import {Text, View} from 'react-native'
import { Goal, GoalVisualizer, NewGoal } from "../features/goals"
import AsyncStorage, { useAsyncStorage } from "@react-native-async-storage/async-storage"
import dayjs from "dayjs"

export const Goals = () => {
    const [goals, setGoals] = useState<Goal[]>()
    const [refresh, setRefresh] = useState(false)

    const toggleRefresh =() => {
        setRefresh(!refresh)
    }

    
    useEffect( () => {
        const getAllGoals = async () => {
            const keys = await AsyncStorage.getAllKeys()
            let jsonGoals: Goal[] = []
            keys.forEach(async key => {
                const jsonValue = await AsyncStorage.getItem(key)
                const parsedJson =  jsonValue != null ? JSON.parse(jsonValue): null
                const newGoal : Goal = {
                    title: parsedJson.title,
                    targetValue: parseInt(parsedJson.targetValue),
                    currentValue: parseInt(parsedJson.currentValue),
                    targetDate: dayjs(parsedJson.targetDate)
                }
                
                jsonGoals.push(newGoal)
            })
            console.log(jsonGoals)
            setGoals(jsonGoals)
        } 

        getAllGoals()

    } , [])

    const goalsList = goals?.map(goal => <GoalVisualizer goal={goal} />)

    
    
    return (
        <View>
            <Text>Goals page</Text>
            {goalsList}
            <NewGoal refresh={toggleRefresh} />
        </View>
    )
}