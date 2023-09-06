import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
	About,
	HomeLayout,
	Landing,
	Error,
	Newsletter,
	Coctail,
} from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <Landing />,
			},
			{
				path: 'coctail',
				element: <Coctail />,
			},
			{
				path: 'newsletter',
				element: <Newsletter />,
			},
			{
				path: 'about',
				element: <About />,
				children: [
					{
						index: true,
						element: <h2>Our Company</h2>,
					},
					{
						path: 'person',
						element: <h2>Kraveki Bro</h2>,
					},
				],
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
