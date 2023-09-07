import Wrapper from '../assets/wrappers/CocktailList';
import CoctailCard from './CoctailCard';

const CoctailList = ({ drinks }) => {
	if (!drinks) {
		return (
			<h4 style={{ textAlign: 'center' }}>No matching coctails found...</h4>
		);
	}
	const formattedDrinks = drinks.map((item) => {
		const { idDrink, strDrink, strDrinkThumb, strAlcohilic, strGlass } = item;
		return {
			id: idDrink,
			name: strDrink,
			image: strDrinkThumb,
			info: strAlcohilic,
			glass: strGlass,
		};
	});
	return (
		<Wrapper>
			{formattedDrinks.map((item) => {
				return <CoctailCard key={item.id} {...item} />;
			})}
		</Wrapper>
	);
};
export default CoctailList;
