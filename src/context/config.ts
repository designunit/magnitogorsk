import { createContext } from 'react'

export type Config = {
    mapUrl: string
}

export const defaultConfig: Config = {
    mapUrl: 'https://mesto.io/5MDHL19WH3R7NUY6',
}

export const ConfigContext = createContext<Config>(defaultConfig)
