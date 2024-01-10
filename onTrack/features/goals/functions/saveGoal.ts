import AsyncStorage from "@react-native-async-storage/async-storage"
import { Goal } from "../types/Goal"

export const saveGoal = async (goal: Goal) => {
    try {
        await AsyncStorage.setItem(goal.title, JSON.stringify(goal))
        console.log("saved")
    } catch (error) {
        console.error(error)
    }
}
