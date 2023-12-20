import React from 'react';
import { useGlobalContext } from '../context';
import Loading from './Loading';

const CocktailList = () => {
	const { coctails, loading } = useGlobalContext();
	console.log(coctails);

	if (loading) {
		return <Loading />
	}
	if (coctails.length < 1) {
		return (
			<h2 className='section-title'>
				no cocktails
			</h2>
		)
	}
	return (
		<div>
			<h2>cocktail list</h2>
		</div>
	)
}

export default CocktailList
