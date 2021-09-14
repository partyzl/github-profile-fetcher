import React from 'react';
import { useSelector } from 'react-redux';

const ProfileInfo = () => {
	//const { avatar_url, login, location, html_url } = useSelector((state) => state.user);
	const { user } = useSelector((state) => state.userReducer);

	return (
		<>
			<h2>{user.login}</h2>
			<div>
				{user.avatar_url ? <img src={user.avatar_url} alt="User's Profile Picture" /> : <p></p>}
			</div>
			<a href={user.html_url} target="_blank"></a>
			<h3>{user.location ? user.location : ''}</h3>
			{user.login ? <h2> {user.login}'s Repos</h2> : ''}
		</>
	);
};

export default ProfileInfo;
