import { METHODS } from "./enums"

export interface APIProperties {
    name: string
    description: string
    method: METHODS
    response: {
        type: Object
        status: 200 | 400 | 500
    }
    query?: string | string[]
    params?: string | string[]
    body?: string | string[]
    headers?: string | string[]
}

export interface APIProps {
    apis: APIProperties[]
}