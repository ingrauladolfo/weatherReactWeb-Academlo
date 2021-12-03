export const Request = async (lat, lon) => {
	try {
		const api_key = "edeb62d33bea034dde38a95817686a57";
		const res = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?appid=${api_key}&lon=${lon}&lat=${lat}`
		);
		const data = await res.json();
		const picture = [
			{
				clouds: data.clouds.all,
				city: data.name,
				id: data.id,
				country: data.sys.country,
				description: data.weather[0].description,
				icon: data.weather[0].icon,
				cloud: data.weather[0].main,
				wind: data.wind.speed,
				pressure: data.main.pressure,
				temp: data.main.temp,
			},
		];

		return picture;
	} catch (error) {
		return "Sorry! Could not load API data..";
	}
};
