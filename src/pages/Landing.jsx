import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import CoctailList from '../components/CoctailList';
import SearchForm from '../components/SearchForm';

const cocktailSearchUrl =
	'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

import { useQuery } from '@tanstack/react-query';

const searchCocktailsQuery = (searchTerm) => {
	return {
		queryKey: ['search', searchTerm || 'all'],
		queryFn: async () => {
			const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
			return response.data.drinks;
		},
	};
};

export const loader =
	(queryClient) =>
	async ({ request }) => {
		const url = new URL(request.url);

		const searchTerm = url.searchParams.get('search') || '';
		await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
		return { searchTerm };
	};

const Landing = () => {
	const { searchTerm } = useLoaderData();
	const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));
	return (
		<>
			<SearchForm searchTerm={searchTerm} />
			<CoctailList drinks={drinks} />
		</>
	);
};
export default Landing;
