import React from 'react'
import { MainNavigation } from '.'
import headerStyles from './header.module.scss'
import * as Routes from '../../routes'
export const Header = () => {
	return (
		<header>
			<MainNavigation />
		</header >
	)
}