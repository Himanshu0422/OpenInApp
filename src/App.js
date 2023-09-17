import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";

function App() {

	const [ user, setUser ] = useState();
    const [ profile, setProfile ] = useState();
	const getProfile = () => {
		const data = JSON.parse(localStorage.getItem('profile'));
		setProfile(data);
	}
	useEffect(() => {
		getProfile();
	}, []);
	return (
		<main className="container">
			{profile ? <Dashboard user={profile} setProfile={setProfile} /> : <SignIn setUser={setUser} setProfile={setProfile} user={user} />}
		</main>
	);
}

export default App;
