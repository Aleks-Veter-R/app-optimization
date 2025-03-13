import { NavLink } from "react-router";
import './styles.scss';

const MainNavigation = () => {
    return (
        <div className='app-navigation'>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/second-page">
                Trending Concerts
            </NavLink>
        </div>
    );
}

export default MainNavigation;
