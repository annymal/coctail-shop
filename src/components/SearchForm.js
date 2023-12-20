import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
	const { setSearchTerm } = useGlobalContext();
	const searchValue = React.useRef('')
	return (
		<section>
			<input type='text' id='name' ref={searchValue} onChange={setSearchTerm} />
		</section>
	)
}

export default SearchForm