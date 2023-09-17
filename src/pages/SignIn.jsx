import React from 'react';
import './SignIn.css';
import FormGroup from '../components/SignIn/FormGroup';
import Socials from '../components/SignIn/Socials';


const SignIn = ({ setUser, setProfile, user }) => {
	return (
		<div className='signin__page__container'>
			<a href="index.html" className='logo'>LOGO</a>

			<div className="form__container">
				<h1 className='board__logo'>Board.</h1>

				<FormGroup setUser={setUser} setProfile={setProfile} user={user} />
			</div>
			<Socials />
		</div>
	)
}

export default SignIn;