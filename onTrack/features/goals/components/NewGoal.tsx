import dayjs from "dayjs"
import React from "react"
import { useState } from "react"
import { Button, NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData, View } from "react-native"
import  { DateType } from "react-native-ui-datepicker"
import { ModalDatePicker } from "../../date"
import { Goal, saveGoal } from ".."

interface IProps  {
    refresh: () => void
}

export const NewGoal = ({refresh}: IProps) => {
    const [goal, setGoal ] = useState<Goal>({
        title: "",
        targetValue: 0,
        currentValue: 0,
        targetDate: dayjs()
    })

    const handleTitleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const {text} = e.nativeEvent

        setGoal({
            ...goal,
            title: text
        })
    }

    const handleTargetValueChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const {text} = e.nativeEvent

        setGoal({
            ...goal,
            targetValue: parseInt(text)
        })
    }

    const handleCurrentValueChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const {text} = e.nativeEvent

        setGoal({
            ...goal,
            currentValue: parseInt(text)
        })
    }

    const handleDateChange = (date: DateType) => {
        setGoal({
                ...goal,
                targetDate: dayjs(date)
            })
    }

    
    return (
        <View>
            <Text>New Goal</Text>
            <TextInput value={goal.title} placeholder="Goal title" onChange={(e) => handleTitleChange(e)}/>
            <TextInput keyboardType="numeric" value={goal.currentValue.toString()} placeholder="Current Value" onChange={e => handleCurrentValueChange(e)} />
            <TextInput value={goal.targetValue.toString()} placeholder="Goal Target" onChange={e => handleTargetValueChange(e)}/>
            <ModalDatePicker handleDateChange={handleDateChange} />
                
            <Button title="Save Goal" onPress={() => {
                saveGoal(goal)
                refresh()}} />
        </View>

        
        
    )
}