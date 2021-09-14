import React from 'react';

export default ({ profileData }) => {
	return (
		<>
			<img src={profileData.avatar_url} alt="User's Profile Picture" />
			<a href={profileData.html_url} target="_blank">
				<h2>{profileData.login}</h2>
			</a>
		</>
	);
};
