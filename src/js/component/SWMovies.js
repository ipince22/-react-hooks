import React, { useState, useEffect } from "react";

export function SWMovies() {
	const [number, setNumber] = useState("1");
	const [movie, setMovie] = useState([]);

	function getToDo(url) {
		fetch(url)
			.then(resp => resp.json())
			.then(data => {
				setMovie(data);
				console.log("getToDo", data);
			});
	}
	useEffect(() => {
		getToDo();
	}, []);

	return (
		<>
			<div className="container">
				<h3 className="bg-primary">Pick a Movie</h3>
				<p className="text-left bg-light">
					<b>Title: </b>
					{movie.title}
				</p>
				<p className="text-left bg-light">
					<b>Director: </b>
					{movie.director}
				</p>
				<p className="text-left bg-light">
					<b>Producer: </b>
					{movie.producer}
				</p>
				<p className="text-justify bg-light">
					<b>Opening crawl:</b>
					{movie.opening_crawl}
				</p>
				<select
					value={number}
					onChange={event => {
						setNumber(event.target.value);

						let url =
							"https://swapi.co/api/films/" + event.target.value;
						getToDo(url);
					}}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
					<option value="6">6</option>
					<option value="7">7</option>
				</select>
			</div>
		</>
	);
}
