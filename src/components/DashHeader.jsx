import "../pages/Dashboard.css";
import { googleLogout } from '@react-oauth/google';

const DashHeader = ({ user, setProfile }) => {
	const logOut = () => {
		localStorage.removeItem('profile');
		window.location.reload(false);
	};

	return (
		<div className="dash__header__bar">
			<h2 className="dahsboard">Dashboard</h2>

			<div className="header__right">
				<div className="search__box">
					<input
						type="text"
						className="search__bar"
						placeholder="Search..."
					/>
					<i className="ri-search-line"></i>
				</div>

				<button className="bell__icon">
					<i className="ri-notification-2-line"></i>
				</button>

				<div className="profile__icon">
					{user && <img src={user.picture} alt="userimage" />}

					<ul
						className="profile__dropdown"
					>
						<li>{user?.name}</li>
						<li>
							<button onClick={() => logOut()}>Log Out</button>
						</li>
					</ul>
				</div>
				<button
					className="menu__toggle"
					onClick={() => {
						document
							.querySelector(".sidebar__container")
							.classList.toggle("active");
					}}
				>
					<i className="ri-menu-4-line"></i>
				</button>
			</div>
		</div>
	);
};

export default DashHeader;
