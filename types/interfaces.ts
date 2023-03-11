import { METHODS, PARAMETERS } from "./enums"
import { Dispatch, SetStateAction } from "react";

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export interface APIProperties {
    name: string
    description: string
    method: METHODS
    responses: APIResponseProps[]
    query?: APISchemaProps[]
    params?: APISchemaProps[]
    body?: APISchemaProps[]
    headers?: APISchemaProps[]
}

export interface APIProps {
    apis: APIProperties[]
}
export interface APISchemaProps {
    type: string
    description: string
    example: string
    name: string
}
export interface APIParameterProps {
    name: PARAMETERS
    params: APISchemaProps[]
}

export interface APIResponseProps {
    visible: number
    setVisible: Dispatcher<number>
    status: number
    type?: string
    err?: string
}