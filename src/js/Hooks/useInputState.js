import { useState } from "react";

function useInputState(initialval) {
	const [value, setValue] = useState(initialval);
	const handleChange = event => {
		setValue(event.target.value);
	};
	const reset = () => setValue("");

	return [value, handleChange, reset];
}
export default useInputState;
