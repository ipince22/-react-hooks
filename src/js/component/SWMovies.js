import React, { useState, useEffect } from "react";
import axios from "axios";
//import { monitorEventLoopDelay } from "perf_hooks";

export function SWMovies() {
	const [number, setNumber] = useState(1);
	const [movie, setMovie] = useState("");
	/*
useEffect(() => {
		fetch("https://swapi.co/api/people/")
			.then(resp => resp.json())
			.then(data => {
				setPeople(data.results);
				console.log(data);
			});
	}, []);
    */
	useEffect(
		() => {
			async function getData() {
				const response = await axios.get(
					"https://swapi.co/api/films/${number}"
				);
				setMovie(response.data);
				console.log(response);
			}
			getData();
		},
		[number]
	);

	return (
		<div>
			<h3>Pick a Movie</h3>
			<p>{movie.title}</p>
			<p>{movie.opening_crawl}</p>
			<select
				value={number}
				onChange={event => setNumber(event.target.value)}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
			</select>
		</div>
	);
}
