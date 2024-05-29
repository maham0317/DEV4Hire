import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { privateRoutes } from '@/navigation/navConstants';
import AdminLayout from "@/layouts/admin.layout";

const Authenticated: FC = (): JSX.Element=> {
    return (
        <AdminLayout>
            <Routes>
                { privateRoutes.map(route=> <Route key={route.slug} path={route.path} element={route.element && route.element} />) }
            </Routes>
        </AdminLayout>
    );
};

export default Authenticated;