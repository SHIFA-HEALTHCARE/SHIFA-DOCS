import { METHODS, PARAMETERS } from "./enums"

export interface APIProperties {
    name: string
    description: string
    method: METHODS
    response: {
        type: Object
        status: 200 | 400 | 500
    }
    query?: APISchemaProps[]
    params?: APISchemaProps[]
    body?:APISchemaProps[]
    headers?: APISchemaProps[]
}

export interface APIProps {
    apis: APIProperties[]
}
export interface APISchemaProps{
    type:Object
    description:string
    example:string
    name :string

}
export interface APIParameterProps{
    name:PARAMETERS
    params:APISchemaProps[]

}