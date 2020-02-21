import React from "react";
import useInputState from "../Hooks/useInputState";

export function SimpleFormInputHook() {
	const [email, updateEmail, resetEmail] = useInputState("");
	return (
		<div>
			<p>
				You entered:
				<b>{email}</b>
			</p>
			<input type="text" onChange={updateEmail} value={email} />
			<button onClick={resetEmail}>submit</button>
		</div>
	);
}
