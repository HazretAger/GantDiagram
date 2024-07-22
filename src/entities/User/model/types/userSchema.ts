import { UserType } from '@/entities/User';

export interface UserSchema {
    authUser?: UserType;
    setAuthUser: (user: UserType) => void;
}
