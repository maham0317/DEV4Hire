import { useAppSelector } from '@/store/store';
import { getIsAuthenticated } from '@/store/auth/slice';
import Authenticated from '@/components/Authenticated';
import Unauthenticated from '@/components/Unauthenticated';

const AllRoutes = () => {
    const isAuthenticated = useAppSelector(getIsAuthenticated);

  return (
        <>
            { !isAuthenticated && <Unauthenticated />}
            { isAuthenticated && <Authenticated />}
        </>
    );
};

export default AllRoutes;
