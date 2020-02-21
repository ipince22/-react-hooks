import React from "react";
import useToogle from "../Hooks/useToogle";

export function Toggler() {
	const [isHappy, callIsHappy] = useToogle(true);
	const [isSingle, callIsSingle] = useToogle(false);

	return (
		<div>
			<h1 onClick={callIsHappy}>{isHappy ? "I'm Happy!" : "I'm Sad!"}</h1>

			<h1 onClick={callIsSingle}>
				{isSingle ? "I'm Single!" : "I'm Married!"}
			</h1>
		</div>
	);
}
