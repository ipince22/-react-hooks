import React, { useState } from "react";

export function SimpleFormHook() {
	const [email, setEmail] = useState("");
	const handleChange = event => {
		setEmail(event.target.value.toUpperCase());
	};
	//const resetEmail =
	return (
		<div>
			<p>
				You entered:
				<b>{email}</b>
			</p>
			<input type="text" onChange={handleChange} value={email} />
			<button onClick={() => setEmail("")}>submit</button>
		</div>
	);
}
