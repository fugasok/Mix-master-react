import { useRouteError } from 'react-router-dom';

const SinglePageError = () => {
	const error = useRouteError();
	// console.log(error);
	// return <div>{error.message}</div>;
	return <h2>there was an error...</h2>;
};
export default SinglePageError;
