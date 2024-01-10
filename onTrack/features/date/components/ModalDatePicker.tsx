import dayjs from "dayjs"
import React from "react"
import { useState } from "react"
import { View, Button, } from "react-native"
import { Modal } from "react-native"
import DateTimePicker, { DateType } from "react-native-ui-datepicker"

interface IProps {
    handleDateChange(date: DateType): void
}

export const ModalDatePicker = ({handleDateChange}: IProps) => {
    const [visible, setVisible] = useState(false)
    const toggleModal = () => {
        setVisible(!visible)
    }

    return (
        <View>
            <Button title="Set date" onPress={toggleModal}/>
            <Modal visible={visible}>
                <DateTimePicker minimumDate={dayjs()} mode="date" onValueChange={date => handleDateChange(date)}/>
                <Button title="Pick date" onPress={toggleModal} />
            </Modal>

        </View>
    )
    
}