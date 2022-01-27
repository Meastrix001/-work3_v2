import * as React from 'react'

export interface AppContextInterface {
	name: string
}

export const AppCtx = React.createContext<AppContextInterface | null>(null)
