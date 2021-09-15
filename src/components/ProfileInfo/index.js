import React from 'react';
import { useSelector } from 'react-redux';

const ProfileInfo = () => {
	const { user } = useSelector((state) => state.userReducer);

	return (
		<>
			<div className="container d-flex justify-content-center profile-box">
				<div id="profie-pic">
					{user.avatar_url ? <img src={user.avatar_url} alt="User's Profile Picture" /> : <p></p>}
				</div>
				<div className="profile-data">
					<h1 className="username">{user.login}</h1>
					<h3>{user.location ? user.location : ''}</h3>
					{user.html_url ? (
						<a className="visit-link" href={user.html_url} target="_blank">
							Visit
						</a>
					) : (
						''
					)}
				</div>
			</div>
		</>
	);
};

export default ProfileInfo;
