import { Navigate, Outlet } from 'react-router-dom';
import { useUserStore } from '@/entities/User/model/store/useUserStore';
import { USER_AUTH_DATA } from '@/shared/const/localStorage';

interface ProtectedRouteProps {
    redirectPath?: string;
}

export const ProtectedRoute = (props: ProtectedRouteProps) => {
    const { redirectPath } = props;
    const setAuthUser = useUserStore((state) => state.setAuthUser);
    const user = localStorage.getItem(USER_AUTH_DATA);

    if (user) {
        setAuthUser(JSON.parse(user));
        return <Outlet />;
    }

    return <Navigate to={redirectPath || '/login'} replace />;
};
