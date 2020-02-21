import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { CounterClass } from "./CounterClass";
import { Toggler } from "./Toggler";
import { SimpleFormHook } from "./SimpleFormHook";
import { SimpleFormInputHook } from "./SimpleFormInputHook";
import { SWMovies } from "./SWMovies";
//create your first component
export function Home() {
	return (
		<>
			<div className="text-center mt-5">
				<SWMovies />
				<hr />
				<CounterClass />
				<hr />
				<Toggler />
				<hr />
				<SimpleFormHook />
				<hr />
				<SimpleFormInputHook />
				<hr />
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-success">
					If you see this green button... bootstrap is working
				</a>
				<p>
					Made by{" "}
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>,
					with love!
				</p>
			</div>
		</>
	);
}
