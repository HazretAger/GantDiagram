import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../api/signOut';
import { USER_ACCESS_TOKEN_KEY, USER_AUTH_DATA } from '@/shared/const/localStorage';

export const useSignOut = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: signOut,
        onSuccess: () => {
            localStorage.removeItem(USER_AUTH_DATA);
            localStorage.removeItem(USER_ACCESS_TOKEN_KEY);
            navigate('/login');
        },
    });
};
