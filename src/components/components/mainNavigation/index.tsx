import { NavLink } from "react-router";
import './styles.scss';

const MainNavigation = () => {
    return (
        <div className='app-navigation'>
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/first-page">
                First
            </NavLink>
            <NavLink to="/second-page">
                Second
            </NavLink>
        </div>
    );
}

export default MainNavigation;
