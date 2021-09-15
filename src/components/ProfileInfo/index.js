import React from 'react';
import { useSelector } from 'react-redux';

const ProfileInfo = () => {
	const { user } = useSelector((state) => state.userReducer);

	return (
		<>
			<div className="container d-flex justify-content-center">
				<div id="profie-pic">
					{user.avatar_url ? <img src={user.avatar_url} alt="User's Profile Picture" /> : <p></p>}
				</div>
				<h1 className="username">{user.login}</h1>
				<div>
					{user.html_url ? (
						<a href={user.html_url} target="_blank">
							<br />
							<br />
							Visit
						</a>
					) : (
						''
					)}
				</div>
				<h3>{user.location ? user.location : ''}</h3>
			</div>
		</>
	);
};

export default ProfileInfo;
