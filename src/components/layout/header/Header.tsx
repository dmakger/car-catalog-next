import { NextPage } from 'next'
import Link from 'next/link'

import styles from './Header.module.css'

const Header: NextPage = () => {
	return (
		<header className={styles.header}>
			<Link href={'/'}>Home</Link>
			<Link href={'/about'}>About page</Link>
		</header>
	)
}

export default Header;
