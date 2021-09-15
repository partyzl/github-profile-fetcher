import React from 'react';
import { useSelector } from 'react-redux';

const ProfileInfo = () => {
	const { user } = useSelector((state) => state.userReducer);

	return (
		<>
			<h2>{user.login}</h2>
			<div id="profie-pic">
				{user.avatar_url ? <img src={user.avatar_url} alt="User's Profile Picture" /> : <p></p>}
			</div>
			<a href={user.html_url} target="_blank"></a>
			<h3>{user.location ? user.location : ''}</h3>
		</>
	);
};

export default ProfileInfo;
