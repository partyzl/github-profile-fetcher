import React from 'react';
import { useHistory } from 'react-router';

const BackButton = () => {
	const history = useHistory();
	return (
		<>
			<input id="back-btn" onClick={history.goBack} type="button" value="<" />
		</>
	);
};

export default BackButton;
