import React from 'react';

export default ({ getUser }) => {
	const [input, setInput] = useState('');

	const handleChange = (e) => setInput(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();
		getUser(input);
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
