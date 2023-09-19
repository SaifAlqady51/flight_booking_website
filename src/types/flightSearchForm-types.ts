import {TravelClassType} from "./travelClass-types"

export type InputEventType = React.ChangeEvent<HTMLInputElement>


export type SelectEventType = React.ChangeEvent<HTMLSelectElement>

export type SetInputChangeType =  React.Dispatch<React.SetStateAction<string>>

export type SetSelectChangeType = React.Dispatch<React.SetStateAction<TravelClassType>>
