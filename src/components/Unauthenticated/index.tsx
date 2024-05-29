import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from '@/navigation/navConstants';

const Unauthenticated: FC = (): JSX.Element=> {
    return (
        <Routes>
            { publicRoutes.map(route=> <Route key={route.slug} path={route.path} element={route.element && route.element} />) }
        </Routes>
    );
};

export default Unauthenticated;