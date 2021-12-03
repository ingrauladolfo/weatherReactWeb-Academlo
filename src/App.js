import React, { useEffect, useState } from "react";
import { Request } from "./components/Request";
import { WeatherAPP } from "./components/WeatherApp";

export const App = () => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	const [value, setValue] = useState([]);
	const browser = () => {
		navigator.geolocation.getCurrentPosition(({ coords }) => {
			return setTimeout(() => {
				Request(coords.latitude, coords.longitude)
					.then(setValue)
					.then(
						setState({
							data: [],
							loading: false,
						})
					)
					.catch(console.error);
			}, 500);
		});
	};

	useEffect(() => {
		browser();
	}, []);

	return (
		<>
			{state.loading && <div className="loading"></div>}
			{value.map((element) => {
				return <WeatherAPP key={element.id} {...element} />;
			})}
		</>
	);
};
