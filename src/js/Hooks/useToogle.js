import { useState } from "react";

function useToggle(initialvalue = false) {
	const [state, setState] = useState(initialvalue);
	const toogle = () => {
		setState(!state);
	};
	return [state, toogle];
}

export default useToggle;
