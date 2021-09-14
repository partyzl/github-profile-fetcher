import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRepos, getUserInfo } from '../../redux/actions';

export default () => {
	const [input, setInput] = useState('');
	const dispatch = useDispatch();

	const handleChange = (e) => setInput(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getRepos(input));
		dispatch(getUserInfo(input));
		setInput('');
	};

	return (
		<>
			<h1>Search for a user!</h1>
			<form className="user-search" onSubmit={handleSubmit}>
				<label>
					github.com/
					<input type="text" placeholder="username" onChange={handleChange} value={input} />
				</label>
				<input type="submit" value="Search" />
			</form>
		</>
	);
};
