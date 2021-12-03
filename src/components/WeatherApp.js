import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTemperatureLow,
	faWind,
	faCloud,
} from "@fortawesome/free-solid-svg-icons";

export const WeatherAPP = ({
	city,
	clouds,
	country,
	description,
	icon,
	wind,
	pressure,
	temp,
}) => {
	const [temps, settemps] = useState({
		data: [temp - 273.15],
		aux: true,
		grade: "°C",
	});

	const Degrees = () => {
		const [data] = temps.data;
		if (temps.aux) {
			settemps({
				data: [(data * 9) / 5 + 32],
				aux: false,
				grade: "°F",
			});
		} else {
			settemps({
				data: [((data - 32) * 5) / 9],
				aux: true,
				grade: "°C",
			});
		}
	};

	return (
		<div className="box">
			<div className="box-weather">
				<h1>My Weather App</h1>
				<h2>{`${city}, ${country}`}</h2>
			</div>
			<div className="boxed">
				<div className="boxed-icons">
					<img
						src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
						alt={"weather cloud"}
					/>
					<p className="text-icon" >
						{`${temps.data[0].toFixed(2)}`}{" "}
						<span className="text-fluid">{`${temps.grade}`}</span>
					</p>
				</div>
				<div className="boxed-info">
					<p className="text-color">{`"${description}"`}</p>
					<p className="text-icon">
						<FontAwesomeIcon icon={faWind} />{" "}
						<span className="text-color">Wind speed:</span> {wind} m/s
					</p>
					<p className="text-icon">
						<FontAwesomeIcon icon={faCloud} />{" "}
						<span className="text-color">Clouds:</span> {clouds} %
					</p>
					<p className="text-icon">
						<FontAwesomeIcon icon={faTemperatureLow} />
						<span className="text-color">Pressure:</span> {pressure} mb
					</p>
				</div>
			</div>

			<div className="boxed-button">
				<button onClick={Degrees}>DEGREES °F/°C</button>
			</div>
		</div>
	);
};
