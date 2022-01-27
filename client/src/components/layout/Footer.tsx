import { useContext } from 'react'
import { AppCtx } from '../../Contexts'
import footerStyles from './footer.module.scss'
export const Footer = () => {
	return (
		<footer className={footerStyles.footer}>
			<div className={footerStyles.text}>
				KnowId © 2022 All right reserved - Design & Developed by ArteveldeHogeSchool, Inc
			</div>

		</footer>
	)
}
