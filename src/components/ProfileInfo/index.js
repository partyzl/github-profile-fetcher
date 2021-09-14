import React from 'react';
import { useSelector } from 'react-redux';

const ProfileInfo = () => {
	//const { avatar_url, login, location, html_url } = useSelector((state) => state.user);
	const { user } = useSelector((state) => state.userReducer);

	return (
		<>
			<img src={user.avatar_url} alt="User's Profile Picture" />
			<a href={user.html_url} target="_blank">
				<h2>{user.login}</h2>
			</a>
			<h3>{user.location ? user.location : 'Unknown Location'}</h3>
		</>
	);
};

export default ProfileInfo;
