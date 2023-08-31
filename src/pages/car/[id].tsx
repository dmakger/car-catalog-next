import { NextPage } from 'next'
import { useRouter } from 'next/router';

const CarPage: NextPage = () => {
	const { push, replace } = useRouter()
	// console.log(asPath, pathname, query, basePath, locale)
	return (
		<div>
			<button onClick={() => push('/')}>Go home</button>
			<button onClick={() => replace('/')}>Go home</button>
		</div>
	)
}

export default CarPage;
