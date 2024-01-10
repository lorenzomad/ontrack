import { Dayjs } from "dayjs";

export type Goal = {
    title: string;
    targetValue: number;
    currentValue: number;
    targetDate: Dayjs;
};
