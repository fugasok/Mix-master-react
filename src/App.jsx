import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
	About,
	HomeLayout,
	Landing,
	Error,
	Newsletter,
	Coctail,
	SinglePageError,
} from './pages';

import { loader as landingLoader } from './pages/Landing';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <SinglePageError />,
				loader: landingLoader,
			},
			{
				path: 'coctail/:id',
				errorElement: <SinglePageError />,
				element: <Coctail />,
			},
			{
				path: 'newsletter',
				element: <Newsletter />,
			},
			{
				path: 'about',
				element: <About />,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
