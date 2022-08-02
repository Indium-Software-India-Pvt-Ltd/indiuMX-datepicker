/**
 * This file was generated from IndiuMXDatepicker.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue, EditableValue } from "mendix";

export type WeekDaysDisableEnum = "Weekend" | "Weekdays" | "None";

export type PastFutureDaysEnum = "Past" | "Future" | "None";

export type DateFormatEnum = "Year" | "Date" | "Month";

export interface IndiuMXDatepickerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    id: string;
    DatePicker: EditableValue<Date>;
    onChange?: ActionValue;
    weekDaysDisable: WeekDaysDisableEnum;
    pastFutureDays: PastFutureDaysEnum;
    dateFormat: DateFormatEnum;
    textTemp?: DynamicValue<string>;
    placeholder: string;
}

export interface IndiuMXDatepickerPreviewProps {
    class: string;
    style: string;
    DatePicker: string;
    onChange: {} | null;
    weekDaysDisable: WeekDaysDisableEnum;
    pastFutureDays: PastFutureDaysEnum;
    dateFormat: DateFormatEnum;
    textTemp: string;
    placeholder: string;
}
