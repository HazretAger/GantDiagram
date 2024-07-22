import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { signInByEmail } from '../../api/signInByEmail';
import { USER_ACCESS_TOKEN_KEY, USER_AUTH_DATA } from '@/shared/const/localStorage';

export const useSignInByEmail = () => {
    const navigate = useNavigate();

    return useMutation({
        mutationFn: signInByEmail,
        onSuccess: (data) => {
            localStorage.setItem(USER_AUTH_DATA, JSON.stringify(data.user));
            localStorage.setItem(USER_ACCESS_TOKEN_KEY, JSON.stringify(data.token));
            navigate('/');
        },
    });
};
