import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRepos, getUserInfo } from '../../redux/actions';
import github from '../../images/github.svg';

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
			<div className="search-element d-flex justify-content-center sticky-top">
				<img
					className="logo bi bi-github"
					src="https://www.pngarts.com/files/8/Github-Logo-Transparent-Background-PNG.png"
					alt="Github logo"
				/>
				<form className="user-search" onSubmit={handleSubmit}>
					<label>
						github.com/
						<input
							type="text"
							placeholder="Search or jump to..."
							onChange={handleChange}
							value={input}
						/>
					</label>
					<input id="search-btn" type="submit" value="Search" />
				</form>
			</div>
		</>
	);
};
