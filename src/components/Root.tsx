import { useEffect } from 'react';
import { getTest } from '../../rests/rests/fetchFns'
import { Outlet } from "react-router";

import MainNavigation from './components/mainNavigation';

const HomePage = () => {
    useEffect(() => {
        getTest('http://localhost:9090/test-rest');
    }, []);

    return (
        <div>
            <MainNavigation />
            <Outlet />
        </div>
    );
}

export default HomePage;
