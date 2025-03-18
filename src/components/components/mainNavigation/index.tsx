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
            <NavLink to="/third-page">
                Third
            </NavLink>
            <NavLink to="/fourth-page">
                Fourth
            </NavLink>
        </div>
    );
}

export default MainNavigation;
